"use client"
import React from "react"

interface ScrollIndicatorProps {
  className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ className = "" }) => {
  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    })
  }

  return (
    <div className={`flex flex-col items-center justify-center py-1 mt-0 ${className}`}>
      <div className="text-center">
        <p className="text-xs text-teal-500 font-medium mb-0">
          Scroll down to view more
        </p>
      </div>
    </div>
  )
}

export default ScrollIndicator 