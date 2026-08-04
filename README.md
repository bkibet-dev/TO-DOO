# 🥐 Batch & Bake Order Tracker
A real-time React order management application

## 🔄 Information Flow & Architecture

* **Parent-Child Component Tree:** Component **1** (Layout/App) holds the central state and passes data downwards to children.
* **Downward Data Flow (Props):** State flows from the root layout container down to child components (like the form and order list) via **props**.
* **Inverse Data Flow (Callbacks):** Child components (like Component **2** for order entry) use **callbacks** to send new data or updates back up to the parent container.

## ⚙️ How It Works

* **Order Creation:** Users submit new bakery orders through a specialized entry form, defining the customer name, item, quantity, and urgency level.
* **Kanban Workflow Engine:** Orders function as dynamic tasks that are tracked and moved across distinct kitchen stages (*Mixing* $\rightarrow$ *In Oven* $\rightarrow$ *Ready for Pickup*).
* **State Management:** Built using React to demonstrate core principles like unidirectional data flow, lifting state up, and parent-child component communication.

## 🎨 Styles & Fonts Used

* **Color Palette:**
  * **Ivory Cream:** `#F5F5DA`
  * **Crimson Wine:** `#7B021D`
* **Typography:**
  * **Headings:** Luxury editorial serif (e.g., *Playfair Display*)
  * **UI Elements:** Clean modern sans-serif (e.g., *Montserrat*)
