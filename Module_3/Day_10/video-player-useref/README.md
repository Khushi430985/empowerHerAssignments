# Video Player using useRef (React)

## Objective
To demonstrate how the useRef hook can be used to control a video DOM element directly without using React state.

## Description
This project implements a custom video player using the HTML `<video>` element.
Play, Pause, Forward, and Rewind controls are implemented using `useRef`.
The video behavior changes without causing any React re-render.

## Mandatory Features
- Single video player
- Video controlled using `useRef`
- No use of `useState` for play/pause
- No DOM access using `document.getElementById`

## Optional Enhancement
- Multiple videos implemented using `useState`
- Video switching using Previous and Next buttons
- Video controls still handled using `useRef`

## Key Learning
- `useRef` can control DOM elements directly
- `useRef` does not trigger re-render
- Not all UI behavior in React requires state

## Tech Stack
- React.js
- JavaScript
- HTML5 Video
