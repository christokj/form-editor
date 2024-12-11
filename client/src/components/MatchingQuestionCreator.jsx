import React, { useState } from "react";

const MatchingQuestionCreator = () => {
  const [question, setQuestion] = useState("");
  const [categories, setCategories] = useState(["Category 1"]);
  const [items, setItems] = useState(["Item 1"]);
  const [draggedColumn, setDraggedColumn] = useState(null);

  // Handle Question Input
  const handleQuestionChange = (e) => setQuestion(e.target.value);

  // Add/Remove Category
  const addCategory = () => setCategories([...categories, `Category ${categories.length + 1}`]);
  const removeCategory = (index) =>
    setCategories(categories.filter((_, i) => i !== index));

  // Add/Remove Item
  const addItem = () => setItems([...items, `Item ${items.length + 1}`]);
  const removeItem = (index) =>
    setItems(items.filter((_, i) => i !== index));

  // Drag-and-Drop Handlers
  const handleDragStart = (e, index, type) => {
    setDraggedColumn({ index, type });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (e, targetIndex, type) => {
    e.preventDefault();

    if (draggedColumn.type !== type) return; // Ensure same type of column is dragged

    const updatedList = [...(type === "category" ? categories : items)];
    const [draggedItem] = updatedList.splice(draggedColumn.index, 1);
    updatedList.splice(targetIndex, 0, draggedItem);

    if (type === "category") {
      setCategories(updatedList);
    } else {
      setItems(updatedList);
    }

    setDraggedColumn(null);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Question Input */}
      <div className="p-4 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Form Creator</h2>
        <label className="block text-lg font-semibold mb-2">Question:</label>
        <input
          type="text"
          value={question}
          onChange={handleQuestionChange}
          placeholder="Type your question here..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Categories */}
      <div className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index, "category")}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index, "category")}
              className="flex items-center p-2 bg-gray-50 border rounded shadow cursor-move"
            >
              <input
                type="text"
                value={category}
                onChange={(e) =>
                  setCategories(categories.map((cat, i) =>
                    i === index ? e.target.value : cat
                  ))
                }
                className="flex-1 p-2 border border-gray-300 rounded"
              />
              <button
                onClick={() => removeCategory(index)}
                className="ml-2 p-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={addCategory}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Category
          </button>
        </div>
      </div>

      {/* Items and Belongs To */}
      <div className="p-4 bg-white rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Items and Belongs To</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Items */}
          <div>
            <h4 className="font-semibold mb-2">Items</h4>
            {items.map((item, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, index, "item")}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, index, "item")}
                className="flex items-center p-2 bg-gray-50 border rounded shadow cursor-move"
              >
                <input
                  type="text"
                  value={item}
                  onChange={(e) =>
                    setItems(items.map((it, i) =>
                      i === index ? e.target.value : it
                    ))
                  }
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => removeItem(index)}
                  className="ml-2 p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              onClick={addItem}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Add Item
            </button>
          </div>

          {/* Belongs To */}
          <div>
            <h4 className="font-semibold mb-2">Belongs To</h4>
            {items.map((_, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 border rounded shadow"
              >
                <select className="w-full p-2 border border-gray-300 rounded">
                  <option value="">Select Category</option>
                  {categories.map((category, i) => (
                    <option key={i} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingQuestionCreator;
