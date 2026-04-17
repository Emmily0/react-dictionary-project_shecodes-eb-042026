import React from "react";
import "./SearchIllustration.css";

export default function SearchIllustration () {
    return (
        <div className="SearchIllustration">
            <svg viewBox="0 0 680 400">

                <rect className="blurred-line l1" x="180" y="80" width="200" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l2" x="180" y="97" width="160" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l3" x="180" y="114" width="185" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l4" x="180" y="140" width="190" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l5" x="180" y="157" width="150" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l6" x="180" y="174" width="175" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l7" x="180" y="200" width="165" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l8" x="180" y="217" width="140" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l9" x="180" y="234" width="180" height="7" rx="3" fill="#e6d8c8"/>

                <rect className="blurred-line l2" x="400" y="80" width="140" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l3" x="400" y="97" width="110" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l4" x="400" y="114" width="130" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l5" x="400" y="140" width="120" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l6" x="400" y="157" width="100" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l7" x="400" y="174" width="135" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l8" x="400" y="200" width="115" height="7" rx="3" fill="#e6d8c8"/>
                <rect className="blurred-line l9" x="400" y="217" width="125" height="7" rx="3" fill="#e6d8c8"/>

                <g className="glass">
                    <circle cx="310" cy="200" r="80" fill="#FBECDE" fillOpacity="0.95" stroke="#f2994a" strokeWidth="2.5" />
                    <g className="focused-text">
                    <rect x="262" y="168" width="96" height="10" rx="5" fill="#976736"/>
                        <rect x="262" y="188" width="76" height="10" rx="5" fill="#976736"/>
                        <rect x="262" y="208" width="88" height="10" rx="5" fill="#976736"/>
                        <rect x="262" y="228" width="60" height="10" rx="5" fill="#5C3E20" opacity="0.6"/>
                        </g>
                    </g>
                <g className="handle">
                <line x1="372" y1="262" x2="415" y2="310" stroke="#976736" strokeWidth="10" strokeLinecap="round"/>
                <line x1="372" y1="262" x2="415" y2="310" stroke="#f2994a" strokeWidth="6" strokeLinecap="round"/>
                </g>
            </svg>
        </div>
    );
}