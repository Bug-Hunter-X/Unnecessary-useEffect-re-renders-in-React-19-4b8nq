# Unnecessary useEffect re-renders in React 19

This repository demonstrates a common issue in React 19 applications where the `useEffect` hook triggers more often than expected, leading to performance problems.  The problem arises from missing dependencies in the `useEffect` hook's dependency array.

## Problem
The `useEffect` hook is designed to perform side effects based on changes in specific state variables.  However, if you omit those state variables from the dependency array, the `useEffect` runs after every render, regardless of whether the relevant state has changed.

## Solution
Ensure that all state variables used within the `useEffect` hook are listed in its dependency array. This ensures that the side effect only runs when necessary, optimizing performance.