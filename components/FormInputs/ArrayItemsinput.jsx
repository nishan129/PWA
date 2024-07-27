"use client";
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function ArrayItemsInput({ setItems, items = [], itemTitle }) {
    const [item, setItem] = useState('');
    const [showTagForm, setShowTagForm] = useState(false);

    function addItem() {
        if (!item) return;
        setItems([...items, item]);
        setItem('');
    }

    function removeItem(index) {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    }

    return (
        <div className="sm:col-span-2">
            {showTagForm ? (
                <div className="flex items-center">
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 21 21"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                                />
                            </svg>
                        </div>
                        <input
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            type="text"
                            id="voice-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
                            placeholder={`Create ${itemTitle}...`}
                        />
                    </div>
                    <button
                        onClick={addItem}
                        type="button"
                        className="shrink-0 inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium dark:text-white text-slate-800 rounded-lg border border-green-800 focus:ring-1 focus:outline-none focus:ring-green-800 bg-green-600"
                    >
                        <Plus className="w-4 h-4 me-2 dark:text-slate-50 text-stone-800" />
                        Add
                    </button>
                    <button
                        type="button"
                        onClick={() => setShowTagForm(false)}
                        className="ml-3 shrink-0 w-8 h-8 px-2 bg-red-400 rounded-full flex items-center justify-center"
                    >
                        <X className="w-4 h-4 dark:text-slate-50 text-slate-800" />
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => setShowTagForm(true)}
                    type="button"
                    className="flex items-center space-x-1 dark:text-slate-50 text-slate-800 py-1 px-2"
                >
                    <Plus />
                    <span>Add {itemTitle}</span>
                </button>
            )}
            <div className="flex flex-wrap gap-4 mt-2">
                {items.map((item, i) => (
                    <div
                        onClick={() => removeItem(i)}
                        key={i}
                        className="flex space-x-1 items-center text-slate-800 dark:text-slate-50 bg-slate-200 dark:bg-slate-600 rounded-lg px-2 py-2 cursor-pointer"
                    >
                        <p>{item}</p>
                        <X className="w-4 h-4" />
                    </div>
                ))}
            </div>
        </div>
    );
}
