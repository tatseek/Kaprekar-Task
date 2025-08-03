# 🔢 Kaprekar Number Toolset

A collection of interactive HTML tools built to explore and understand **Kaprekar numbers** — a fascinating class of numbers in recreational mathematics. This project allows users to check, generate, and explore Kaprekar constants and related patterns in a clean, responsive web interface.

---

## 🚀 Features

### 1. **Find Kaprekar Constant**
- Input any 3 to 5-digit number and apply the **Kaprekar routine**.
- Shows each step until it converges to **6174** (for 4-digit numbers).
- Helps visualize the iterative process.

### 2. **Find Kaprekar's Constant Numbers (100–99999)**
- Instantly generate and display all numbers that act as **Kaprekar constants** within the given range.
- Great for exploring number theory patterns.

### 3. **Check if a Number is Kaprekar**
- Enter any number to check if it satisfies the **Kaprekar condition**:
  > A number _n_ is Kaprekar if there exists a split of `n²` such that the sum of its parts equals _n_.

### 4. **List All Kaprekar Numbers (1 to MAX)**
- Accepts a max limit and returns all Kaprekar numbers from `1` up to that number.
- Supports values up to **6-digit input**.

---

## 🖼️ UI Overview

- Clean and responsive layout using vanilla HTML + CSS
- Menu navigation on the side to easily switch between tasks
- Subtle hover effects and shadows for better interactivity

---

## 📁 File Structure

```
📂 Kaprekar-Toolset/
├── Kaprekar_task.html               # Main menu page
├── Kaprekar_Constant.html          # Kaprekar constant finder
├── Kaprekar_Const_Num.html         # Kaprekar constant numbers in a range
├── Check_Kaprekar_Num.html         # Kaprekar number checker
├── Kaprekar_Num_list.html          # Kaprekar numbers up to MAX
├── *.js                            # Corresponding JS logic for each tool
├── README.md                       # You are here
```

---

## 🧠 What is a Kaprekar Number?

A number **`n`** is called a **Kaprekar number** if:

- Square of `n` (i.e., `n²`) can be split into two parts
- And the sum of those parts equals `n`

**Example**:
```
45² = 2025 → 20 + 25 = 45 ✅
```

The famous **Kaprekar constant** is **6174** which is reached using a digit rearrangement process on 4-digit numbers.

---

## 🛠️ How to Run

Just open the files in a browser:

1. Download or clone the repo
2. Start with `Kaprekar_task.html`
3. Click on any of the links to begin exploring

---

## 📚 Credits

- Inspired by the work of Indian mathematician **D. R. Kaprekar**
- Built using **HTML**, **CSS**, and **vanilla JavaScript**
