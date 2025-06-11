# 📦 Flexbox Basics

Flexbox is a powerful layout tool in CSS for one-dimensional layouts (either row or column).

---

## 🌐 How it works

You apply `display: flex` to a container.

All direct children (flex items) will now behave according to Flexbox rules.

---

## 🛠️ Key Properties

### On the Flex Container:

- **`flex-direction`**: `row` (default), `column`, `row-reverse`, `column-reverse`
- **`justify-content`**: aligns items *horizontally*
  - Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
- **`align-items`**: aligns items *vertically*
  - Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`

### On the Flex Items:

- **`flex-grow`**: how much an item grows relative to others
- **`flex-shrink`**: how much an item shrinks
- **`flex-basis`**: starting size before growing or shrinking
- **`flex`**: shorthand for all three (`flex-grow flex-shrink flex-basis`)

---

## 🎥 Great Video Resource

[Flexbox in 15 Minutes – YouTube](https://www.youtube.com/watch?v=wsTv9y931o8)

---

## ✅ 4 Practice Questions

You should be able to solve these after reviewing:

---

### 1. Name Centered in Centered Div

**Task:**  
Create a `div` that is centered on the page with a black border that contains your name centered in an `<h2>`.

---

### 2. Flex Container

**Task:**  
Create a `<div>` with three child `<div>`s inside it. Use Flexbox to place them side by side with equal spacing between them.

---

### 3. Flex Alignment

**Task:**  
Create a Flexbox layout where items are stacked vertically and centered both horizontally and vertically on the page.

---

### 4. Responsive Width

**Task:**  
Create three `<div>`s inside a Flexbox container. Make each `<div>` take up exactly one-third of the container's width.

---
