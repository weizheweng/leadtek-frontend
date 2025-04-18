import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart'

interface LineChartProps {
  cpuData: number[],
  diskData: number[],
  memoryData: number[],
}

export function LineChart ({ cpuData, diskData, memoryData }: LineChartProps) {
  const xAxis = Array.from({ length: 100 }, (_, i) => i)

  return (
    <MuiLineChart
      xAxis={[{
        data: xAxis,
        disableTicks: true,
        valueFormatter: () => '',
      }]}
      yAxis={[{
        min: 0,
        max: 100,
      }]}
      series={[
        {
          data: cpuData,
          label: 'CPU Usage',
          color: '#1976d2',
          showMark: false,
          valueFormatter: (value) => `${value?.toFixed(2)}%`,
        },
        {
          data: diskData,
          label: 'Disk Usage',
          color: '#2e7d32',
          showMark: false,
          valueFormatter: (value) => `${value?.toFixed(2)}%`,
        },
        {
          data: memoryData,
          label: 'Memory Usage',
          color: '#ed6c02',
          showMark: false,
          valueFormatter: (value) => `${value?.toFixed(2)}%`,
        },
      ]}
      height={400}
      sx={{
        '& .MuiChartsAxis-directionX': {
          '& .MuiChartsAxis-tickLabel': {
            fill: 'transparent',
          },
        },
      }}
    />
  )
}
