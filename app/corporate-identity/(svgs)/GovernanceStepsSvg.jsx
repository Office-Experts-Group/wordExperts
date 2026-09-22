// app/corporate-identity/(svgs)/GovernanceStepsSvg.jsx

// A rising staircase of four steps, used as the small marker icon that sits
// beside each rung of the governance scale in CorporateIdentityGovernance.
// filledSteps controls how many treads are filled solid vs outlined, so the
// same icon can visually represent each of the four levels in the list.
export const GovernanceStepsSvg = ({ filledSteps = 1 }) => {
  const steps = [
    { x: 4, y: 30, h: 8 },
    { x: 16, y: 22, h: 16 },
    { x: 28, y: 14, h: 24 },
    { x: 40, y: 6, h: 32 },
  ];

  return (
    <svg viewBox="0 0 52 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {steps.map((s, i) => (
        <rect
          key={i}
          x={s.x}
          y={s.y}
          width="9"
          height={s.h}
          rx="1.5"
          fill={i < filledSteps ? "#046999" : "none"}
          stroke="#046999"
          strokeWidth="1.3"
          opacity={i < filledSteps ? 1 : 0.35}
        />
      ))}
    </svg>
  );
};
