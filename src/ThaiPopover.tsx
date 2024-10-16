'use client'

import React, { useState, useRef, useEffect } from "react";
import Spinner from "./Spinner";

interface ThaiPopoverProps {
  children: string;
  bg?: string;
}

const ThaiPopover: React.FC<ThaiPopoverProps> = ({
  children,
  bg = "transparent",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverHeight, setPopoverHeight] = useState(0);
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (popoverRef.current) {
      if (isHovered) {
        setPopoverHeight(popoverRef.current.scrollHeight);
      } else {
        setPopoverHeight(0);
      }
    }
  }, [isHovered]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://getmatke.pythonanywhere.com/api/g2p",
        {
          method: "POST",
          body: JSON.stringify({ text: children }),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const { result } = await response.json();
      const formattedOutput = result.replaceAll("|", " ");
      setData(formattedOutput);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!data) {
      fetchData();
    }
  };

  const textColor = "black";

  return (
    <div
      style={{
        display: "inline",
        position: "relative",
        cursor: "pointer",
        padding: "4px",
        borderRadius: "4px",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: bg,
        color: textColor,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <div
        ref={popoverRef}
        style={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: isHovered
            ? "translateX(-50%) scale(1)"
            : "translateX(-50%) scale(0)",
          color: "#111",
          backgroundColor: "#f0f0f0",
          padding: "8px",
          borderRadius: "6px",
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? "visible" : "hidden",
          transition:
            "transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease",
          whiteSpace: "nowrap",
          marginTop: "5px",
          height: popoverHeight,
        }}
      >
        <p style={{ fontSize: "30%", textAlign: "left", margin: "5px 0" }}>
          Transliteration:
        </p>
        {loading && data !== null ? (
          <Spinner />
        ) : (
          <p style={{ margin: 0, fontSize: "80%" }}>{data}</p>
        )}
      </div>
    </div>
  );
};

export default ThaiPopover;
