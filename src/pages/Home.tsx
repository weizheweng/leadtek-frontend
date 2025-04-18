import { useEffect, useState, useRef } from 'react'

import { Box, ToggleButtonGroup, ToggleButton, Typography, Stack, CircularProgress } from '@mui/material'
import { BarChart, GaugeChart, LineChart } from 'leadtek-chart-components'

import { useWebSocket } from '../hooks/useWebSocket'
import { safeJsonParse } from '../utils/safeJsonParse'

import type { SystemStatsEvent } from '../types/usage'

const MAX_HISTORY_LENGTH = 100

type ChartType = 'line' | 'bar' | 'gauge'

export function Home () {
  const wsUrl = import.meta.env.VITE_WS_URL
  const { data } = useWebSocket(wsUrl)
  const [cpuHistory, setCpuHistory] = useState<number[]>(Array(MAX_HISTORY_LENGTH).fill(0))
  const [diskHistory, setDiskHistory] = useState<number[]>(Array(MAX_HISTORY_LENGTH).fill(0))
  const [memoryHistory, setMemoryHistory] = useState<number[]>(Array(MAX_HISTORY_LENGTH).fill(0))
  const [chartType, setChartType] = useState<ChartType>('line')
  const lastDataRef = useRef<string>('')

  const systemStatsData = safeJsonParse<SystemStatsEvent>(data ?? '{}')?.data

  useEffect(() => {
    if (!systemStatsData) return
    if (data === lastDataRef.current) return

    lastDataRef.current = data ?? ''

    setCpuHistory(prev => {
      const newHistory = [...prev.slice(1), systemStatsData.cpu.usage]
      return newHistory
    })
    setDiskHistory(prev => {
      const newHistory = [...prev.slice(1), systemStatsData.disk.usage]
      return newHistory
    })
    setMemoryHistory(prev => {
      const newHistory = [...prev.slice(1), systemStatsData.memory.usage]
      return newHistory
    })
  }, [data, systemStatsData])

  const handleChartTypeChange = (_: React.MouseEvent<HTMLElement>, newChartType: ChartType | null) => {
    if (!newChartType) return
    setChartType(newChartType)
  }

  return (
    <Box p={1}>
      <Stack direction="row" gap={2} justifyContent="center">
        <ToggleButtonGroup
          value={chartType}
          exclusive
          onChange={handleChartTypeChange}
          aria-label="chart type"
        >
          <ToggleButton value="line" aria-label="line chart">
            <Typography>Line Chart</Typography>
          </ToggleButton>
          <ToggleButton value="bar" aria-label="bar chart">
            <Typography>Bar Chart</Typography>
          </ToggleButton>
          <ToggleButton value="gauge" aria-label="gauge chart">
            <Typography>Gauge Chart</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {systemStatsData ?
        (
          <Box sx={{ mt: 2 }}>
            {chartType === 'line' && (
              <LineChart
                cpuData={cpuHistory}
                diskData={diskHistory}
                memoryData={memoryHistory}
              />
            )}
            {chartType === 'bar' && (
              <BarChart
                cpu={systemStatsData.cpu.usage}
                disk={systemStatsData.disk.usage}
                memory={systemStatsData.memory.usage}
              />
            )}
            {chartType === 'gauge' && (
              <GaugeChart
                cpu={systemStatsData.cpu.usage}
                disk={systemStatsData.disk.usage}
                memory={systemStatsData.memory.usage}
              />
            )}
          </Box>
        ) :
        (
          <Stack justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
            <CircularProgress />
          </Stack>
        )}
    </Box>
  )
}
