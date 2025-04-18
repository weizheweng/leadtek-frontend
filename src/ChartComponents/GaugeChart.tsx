import { Stack, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge'

import { COLORS } from '../constants/color'

interface GaugeChartProps {
  cpu: number,
  disk: number,
  memory: number,
}

export function GaugeChart ({ cpu, disk, memory }: GaugeChartProps) {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
        <Stack alignItems="center">
          <Typography variant="h6" gutterBottom color="text.primary">CPU Usage</Typography>
          <Gauge
            value={cpu}
            width={200}
            height={200}
            valueMax={100}
            valueMin={0}
            text={`${cpu.toFixed(2)}%`}
            sx={() => ({
              [`& .${gaugeClasses.valueArc}`]: {
                fill: COLORS.CPU,
              },
            })}
          />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
        <Stack alignItems="center">
          <Typography variant="h6" gutterBottom color="text.primary">Disk Usage</Typography>
          <Gauge
            value={disk}
            width={200}
            height={200}
            valueMax={100}
            valueMin={0}
            text={`${disk.toFixed(2)}%`}
            sx={() => ({
              [`& .${gaugeClasses.valueArc}`]: {
                fill: COLORS.DISK,
              },
            })}
          />
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="center">
        <Stack alignItems="center">
          <Typography variant="h6" gutterBottom color="text.primary">Memory Usage</Typography>
          <Gauge
            value={memory}
            width={200}
            height={200}
            valueMax={100}
            valueMin={0}
            text={`${memory.toFixed(2)}%`}
            sx={() => ({
              [`& .${gaugeClasses.valueArc}`]: {
                fill: COLORS.MEMORY,
              },
            })}
          />
        </Stack>
      </Grid>
    </Grid>
  )
}
