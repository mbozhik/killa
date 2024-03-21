'use client'

import React, {useEffect} from 'react'
import {gsap} from 'gsap'

import './CharactersAnimation.css'

export default function MovingElements() {
  useEffect(() => {
    const bounceModifier = (min, max) => {
      const range = max - min
      return function (value) {
        value = parseFloat(value)
        let cycle, clippedValue
        if (value > max) {
          cycle = (value - max) / range
          clippedValue = (cycle % 1) * range
          value = (cycle | 0) & (1 !== 0) ? min + clippedValue : max - clippedValue
        } else if (value < min) {
          cycle = (min - value) / range
          clippedValue = (cycle % 1) * range
          value = (cycle | 0) & (1 !== 0) ? max - clippedValue : min + clippedValue
        }
        return value + 'px'
      }
    }

    const initRandomMovingElements = () => {
      const elementsWrapper = document.querySelector('.moving-elements')
      const containerBounds = elementsWrapper.getBoundingClientRect()
      const wrapperHeight = elementsWrapper.offsetHeight
      const wrapperWidth = elementsWrapper.offsetWidth

      const movingElements = document.querySelectorAll('.moving-elements > div')

      movingElements.forEach((elem) => {
        const {top, left, right, bottom} = elem.getBoundingClientRect()
        const elemWidth = right - left
        const elemHeight = bottom - top
        const elemBounds = elem.getBoundingClientRect()
        let xMax = containerBounds.right - elemBounds.right,
          xMin = containerBounds.left - elemBounds.left,
          yMax = containerBounds.bottom - elemBounds.bottom,
          yMin = containerBounds.top - elemBounds.top

        gsap.to(elem, {
          x: 2000,
          y: 1000,
          rotation: 'random(0, 360)',
          duration: 'random(8, 12)',
          repeat: -1,
          repeatRefresh: true,
          ease: 'none',
          modifiers: {
            x: bounceModifier(xMin, xMax),
            y: bounceModifier(yMin, yMax),
          },
        })
      })
    }

    initRandomMovingElements()
  }, [])

  return (
    <section className="has-moving-elements fixed w-screen h-screen inset-0">
      <div className="moving-elements">
        <div className="ellipsis">
          <svg xmlns="http://www.w3.org/2000/svg" width="403" height="485" viewBox="0 0 403 485" fill="none">
            <path d="M338.104 467.691C419.484 418.191 424.175 277.313 348.581 153.032C272.987 28.7498 145.734 -31.873 64.3529 17.6267C-17.0279 67.1264 -21.7188 208.004 53.8754 332.286C129.47 456.568 256.723 517.19 338.104 467.691Z" fill="#DD5743" />
          </svg>
        </div>
        <div className="square">
          <svg xmlns="http://www.w3.org/2000/svg" width="416" height="412" viewBox="0 0 416 412" fill="none">
            <path d="M0 84.97L326.97 0L415.17 322.67L87.12 411.94L0 84.97Z" fill="#CDD0E7" />
          </svg>
        </div>
        <div className="triangle">
          <svg xmlns="http://www.w3.org/2000/svg" width="291" height="312" viewBox="0 0 291 312" fill="none">
            <path d="M274.202 163.929L87.4233 303.723C62.0255 322.734 25.6193 306.598 22.6413 275.012L0.967759 45.0637C-1.92907 14.3155 29.1917 -8.28179 57.5359 3.97627L265.98 94.1246C294.626 106.517 299.176 145.234 274.196 163.937L274.202 163.929Z" fill="#B18DBC" />
          </svg>
        </div>
        <div className="octagon">
          <svg xmlns="http://www.w3.org/2000/svg" width="361" height="351" viewBox="0 0 361 351" fill="none">
            <path d="M59.4003 50.5425L154.54 6.14254C172.05 -2.02746 192.28 -2.04746 209.81 6.08254L295.32 45.7625C312.8 53.8725 325.82 69.2725 330.92 87.8525L358.33 187.773C363.81 207.743 359.52 229.123 346.77 245.443L284.61 324.963C272.2 340.843 253.16 350.123 233 350.123H130.65C110.87 350.123 92.1503 341.183 79.7103 325.803L14.5703 245.203C1.92032 229.563 -2.83968 208.983 1.66032 189.373L23.2503 95.2425C27.7603 75.5625 41.1003 59.0725 59.3903 50.5325L59.4003 50.5425Z" fill="#CDD0E7" />
          </svg>
        </div>
      </div>
      dsdsd
    </section>
  )
}
