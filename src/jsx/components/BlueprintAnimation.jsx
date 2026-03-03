import React from 'react';
import '../../styles/BlueprintAnimation.css';

/**
 * BlueprintAnimation Component
 * Renders a fixed background with buildings that stick together but don't overlap.
 * Style: Clean architectural row, continuous and neat.
 */
const BlueprintAnimation = () => {
    // Helper to generate horizontal hatching lines for a building face
    const renderHatch = (x1, y1, x2, y2, count, spacing) => {
        return [...Array(count)].map((_, i) => (
            <line
                key={i}
                x1={x1}
                y1={y1 - (i * spacing)}
                x2={x2}
                y2={y2 - (i * spacing)}
                className="blueprint-hatch"
            />
        ));
    };

    return (
        <div className="blueprint-background">
            <svg width="100%" height="100%" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMax slice">
                {/* Continuous "Stick Together" Skyline Profile */}
                <g className="neat-skyline" transform="translate(0, 780)">

                    {/* B1 - Width 140 */}
                    <g transform="translate(0, 0)">
                        {renderHatch(0, 0, 80, 40, 15, 18)}
                        <path d="M0,0 L80,40 L80,-300 L0,-340 Z" className="blueprint-path" />
                        <path d="M80,40 L140,10 L140,-300 L80,-260" className="blueprint-path" />
                        <line x1="80" y1="-300" x2="80" y2="-450" className="blueprint-path marker" />
                    </g>

                    {/* B2 - Starts at 140, Width 160 */}
                    <g transform="translate(140, 10)">
                        <path d="M0,0 L90,45 L90,-450 L0,-495 Z" className="blueprint-path" />
                        <path d="M90,45 L160,10 L160,-450" className="blueprint-path" />
                        <line x1="90" y1="-450" x2="90" y2="-580" className="blueprint-path marker" />
                    </g>

                    {/* B3 - Starts at 300, Width 180 (Central Peak) */}
                    <g transform="translate(300, 30)">
                        {renderHatch(0, -350, 100, -300, 8, 20)}
                        <path d="M0,0 L100,50 L100,-580 L0,-630 Z" className="blueprint-path" />
                        <path d="M100,50 L180,10 L180,-580" className="blueprint-path" />
                        <line x1="100" y1="-580" x2="100" y2="-720" className="blueprint-path marker" />
                    </g>

                    {/* B4 - Starts at 480, Width 140 */}
                    <g transform="translate(480, 20)">
                        {renderHatch(0, 0, 80, 40, 20, 12)}
                        <path d="M0,0 L80,40 L80,-380 L0,-420 Z" className="blueprint-path" />
                        <path d="M80,40 L140,10 L140,-380" className="blueprint-path" />
                    </g>

                    {/* B5 - Starts at 620, Width 110 */}
                    <g transform="translate(620, 0)">
                        <path d="M0,0 L60,30 L60,-220 L0,-250 Z" className="blueprint-path" />
                        <path d="M60,30 L110,5 L110,-220" className="blueprint-path" />
                    </g>

                    {/* B6 - Repeat B1 logic - Starts at 730, Width 140 */}
                    <g transform="translate(730, 15)">
                        {renderHatch(0, 0, 80, 40, 12, 15)}
                        <path d="M0,0 L80,40 L80,-340 L0,-380 Z" className="blueprint-path" />
                        <path d="M80,40 L140,10 L140,-340" className="blueprint-path" />
                    </g>

                    {/* B7 - Repeat B2 style - Starts at 870, Width 160 */}
                    <g transform="translate(870, 40)">
                        <path d="M0,0 L90,45 L90,-280 L0,-325 Z" className="blueprint-path" />
                        <path d="M90,45 L160,10 L160,-280" className="blueprint-path" />
                        <line x1="160" y1="-280" x2="200" y2="-280" className="blueprint-path marker" />
                    </g>

                    {/* B8 - Tall Spaced - Starts at 1030, Width 130 */}
                    <g transform="translate(1030, 25)">
                        {renderHatch(0, 0, 70, 35, 25, 10)}
                        <path d="M0,0 L70,35 L70,-480 L0,-515 Z" className="blueprint-path" />
                        <path d="M70,35 L130,0 L130,-480" className="blueprint-path" />
                    </g>

                    {/* B9 - Far Right filler - Starts at 1160, Width 140 */}
                    <g transform="translate(1160, 10)">
                        <path d="M0,0 L80,40 L80,-150 L0,-190 Z" className="blueprint-path" />
                        <path d="M80,40 L140,10 L140,-150" className="blueprint-path" />
                    </g>

                    {/* B10 - End cap - Starts at 1300, Width 100 */}
                    <g transform="translate(1300, 30)">
                        <path d="M0,0 L60,30 L60,-260 L0,-290 Z" className="blueprint-path" />
                        <path d="M60,30 L100,0 L100,-260" className="blueprint-path" />
                    </g>
                </g>

            </svg>
        </div>
    );
};

export default BlueprintAnimation;
