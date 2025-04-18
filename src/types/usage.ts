import type { SYSTEM_STATS } from '../constants/websocket'

export interface CpuStats {
  usage: number,
}

export interface MemoryStats {
  usage: number,
}

export interface DiskStats {
  usage: number,
}

export interface SystemStats {
  cpu: CpuStats,
  memory: MemoryStats,
  disk: DiskStats,
}

export interface SystemStatsEvent {
  event: typeof SYSTEM_STATS,
  data: SystemStats,
}
