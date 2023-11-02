"use client";
import dayjs from "dayjs";
import React from "react";
import { remove } from "../app/actions";

export const Comment = ({ name, content, createdAt }) => {
  return (
    <div className="flex justify-between border py-1 px-2 rounded mb-1">
      <div>
        <p className="font-bold text-sm">
          {name}{" "}
          <span className="text-[#cdcdcd] italic text-xs ml-3">
            {dayjs(createdAt).format("DD/MM/YYYY HH:mm:ss")}
          </span>
        </p>
        <p className="text-sm">{content}</p>
      </div>
      <div>
        <button onClick={() => remove(name)}>[x]</button>
      </div>
    </div>
  );
};
