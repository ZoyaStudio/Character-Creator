/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import { colors } from '../../utility/colors'
import { makeFilterStyle } from '../../utility/helper-functions'
import { Color, FilterPart, FilterTypes } from '../../utility/types'

type AppProps = {
    filter: Color
    label: string
    handleFilterChange: (
        e: React.ChangeEvent<HTMLInputElement>,
        filterType: FilterTypes,
        part: FilterPart
    ) => void
    part: FilterPart
    handleFilterPresetClick: (color: Color, part: FilterPart) => void
}
const ColorPicker = function ColorPicker({
    filter,
    label,
    handleFilterChange,
    part,
    handleFilterPresetClick,
}: AppProps): JSX.Element {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div
            className={`color-picker ${
                isExpanded ? 'color-picker-expanded' : ''
            }`}
        >
            <h4
                className="color-picker-label"
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyPress={() => setIsExpanded(!isExpanded)}
            >
                Colors - {label}
            </h4>
            <img
                onClick={() => setIsExpanded(!isExpanded)}
                alt="current color"
                src="./color-sample.svg"
                className="color-preview"
                style={{ filter: makeFilterStyle(filter) }}
                onKeyPress={() => setIsExpanded(!isExpanded)}
            />
            <div className="color-section">
                {Object.keys(colors).map((color) => (
                    <button
                        key={color}
                        type="button"
                        onClick={() => {
                            handleFilterPresetClick(colors[color], part)
                        }}
                    >
                        <img
                            src="./color-sample.svg"
                            className="color-selection-preview"
                            alt={`${color} color preview`}
                            key={`${color}color preview`}
                            style={{ filter: makeFilterStyle(colors[color]) }}
                        />
                    </button>
                ))}
            </div>
            <label className="range-label" htmlFor="hue">
                Hue
                <input
                    className="range-input"
                    type="range"
                    name="hue"
                    min={0}
                    max={360}
                    step=".1"
                    value={filter.hue}
                    onChange={(e) => {
                        handleFilterChange(e, 'hue', part)
                    }}
                />
            </label>

            <label className="range-label" htmlFor="sat">
                Staturation
                <input
                    className="range-input"
                    type="range"
                    name="sat"
                    min={0}
                    max={200}
                    step=".1"
                    value={filter.sat}
                    onChange={(e) => {
                        handleFilterChange(e, 'sat', part)
                    }}
                />
            </label>

            <label className="range-label" htmlFor="brit">
                Brightness
                <input
                    className="range-input"
                    type="range"
                    name="brit"
                    min={0.5}
                    max={3.5}
                    step=".05"
                    value={filter.brit}
                    onChange={(e) => {
                        handleFilterChange(e, 'brit', part)
                    }}
                />
            </label>

            <label className="range-label" htmlFor="con">
                Contrast
                <input
                    className="range-input"
                    type="range"
                    name="con"
                    min={0}
                    max={200}
                    step=".1"
                    value={filter.con}
                    onChange={(e) => {
                        handleFilterChange(e, 'con', part)
                    }}
                />
            </label>

            <label className="range-label" htmlFor="op">
                Opacity
                <input
                    className="range-input"
                    type="range"
                    name="op"
                    min={0}
                    max={100}
                    step=".1"
                    value={filter.op}
                    onChange={(e) => {
                        handleFilterChange(e, 'op', part)
                    }}
                />
            </label>
        </div>
    )
}
export default ColorPicker
