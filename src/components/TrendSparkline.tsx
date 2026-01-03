type Props = {
  values: number[]
  width?: number
  height?: number
}

export default function TrendSparkline({ values, width = 110, height = 28 }: Props) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  const points = values.map((v, i) => {
    const x = (i / (values.length - 1)) * width
    const y = height - ((v - min) / range) * height
    return `${x},${y}`
  })

  const path = `M${points.join(" L ")}`
  const delta = values[values.length - 1] - values[0]
  const color = delta > 0 ? "#10B981" : delta < 0 ? "#EF4444" : "#6B7280"

  const last = points[points.length - 1].split(",").map(Number)
  const radius = Math.max(1.5, height * 0.09)

  return (
    <div className="flex items-center" style={{ width, maxWidth: '100%' }}>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
        <path d={path} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={last[0]} cy={last[1]} r={radius} fill={color} />
      </svg>
    </div>
  )
}
