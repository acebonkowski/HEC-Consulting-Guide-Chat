"use client";

import { useState } from "react";
import { clsx } from "clsx";

type DonutItem = {
  label: string;
  hours: number;
  display: string;
  color: string;
};

function polarToCartesian(cx: number, cy: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describeDonutArc(
  cx: number,
  cy: number,
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number
) {
  const startOuter = polarToCartesian(cx, cy, outerRadius, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerRadius, startAngle);
  const startInner = polarToCartesian(cx, cy, innerRadius, startAngle);
  const endInner = polarToCartesian(cx, cy, innerRadius, endAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 1 ${endInner.x} ${endInner.y}`,
    "Z",
  ].join(" ");
}

export function DayInLifeDonut({
  data,
  total,
}: {
  data: ReadonlyArray<DonutItem>;
  total: number;
}) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col items-end pr-3">
      <div className="ml-auto -mt-10 aspect-square w-full max-w-md">
        <svg
          viewBox="0 0 240 240"
          className="h-full w-full"
          role="img"
          aria-label="Distribution of weekly consulting hours"
        >
          {(() => {
            let currentAngle = 0;
            return data.map((item, index) => {
              const sliceAngle = (item.hours / total) * 360;
              const startAngle = currentAngle;
              const endAngle = currentAngle + sliceAngle;
              currentAngle = endAngle;

              return (
                <path
                  key={item.label}
                  d={describeDonutArc(120, 120, 60, 90, startAngle, endAngle)}
                  fill={item.color}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={clsx(
                    "transition-transform duration-200 hover:scale-[1.02]",
                    hoverIndex !== null && hoverIndex !== index && "opacity-40"
                  )}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                >
                  <title>{`${item.label}: ${item.display}`}</title>
                </path>
              );
            });
          })()}
          <text
            x="120"
            y="124"
            textAnchor="middle"
            className="fill-[#334EAC] text-[40px] font-semibold"
          >
            60h
          </text>
          <text
            x="120"
            y="142"
            textAnchor="middle"
            className="fill-[#090814] text-[9px]"
          >
            In Peak Times
          </text>
        </svg>
      </div>
      <div className="ml-auto -mt-4 grid w-full max-w-md grid-cols-2 gap-2 text-sm text-[#090814]">
        {data.map((item, index) => (
          <div
            key={item.label}
            className={clsx(
              "flex items-center justify-start gap-2 text-left transition-colors",
              hoverIndex !== null && hoverIndex !== index && "text-[#090814]/25"
            )}
          >
            <span
              className="inline-flex h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            <span className="font-semibold">{item.label}</span> {item.display}
          </div>
        ))}
      </div>
    </div>
  );
}
