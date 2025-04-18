import { BarChart } from '@mui/x-charts/BarChart'

import { COLORS } from '../constants/color'

interface BarChartProps {
  cpu: number,
  disk: number,
  memory: number,
}

export function BarChartComponent ({ cpu, disk, memory }: BarChartProps) {
  return (
    <BarChart
      series={[
        { data: [cpu], label: 'CPU Usage', valueFormatter: (value) => `${value?.toFixed(2)}%` },
        { data: [disk], label: 'Disk Usage', valueFormatter: (value) => `${value?.toFixed(2)}%` },
        { data: [memory], label: 'Memory Usage', valueFormatter: (value) => `${value?.toFixed(2)}%` },
      ]}
      height={300}
      xAxis={[{ scaleType: 'band', data: ['Usage'] }]}
      yAxis={[{ min: 0, max: 100 }]}
      colors={[COLORS.CPU, COLORS.DISK, COLORS.MEMORY]}
    />
  )
}
