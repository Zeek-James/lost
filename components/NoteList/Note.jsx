// import React, { useState } from "react";
import moment from "moment";
// import { FaReadme } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import { BsTrash3Fill } from "react-icons/bs";

export default function Note({ note }) {
  const date = moment(note?.updatedAt).format("MMM Do YY");

  // const [text, setText] = useState("Zeek Rider");
  // const [bool, setBool] = useState({
  //   speaking: false,
  //   paused: false,
  //   resumed: false,
  //   ended: false,
  // });

  // const synth = window.speechSynthesis;

  // const clickHandler = (value) => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = note?.context;

  //   const amIPending = synth.pending;
  //   if (amIPending) {
  //     synth.cancel();
  //   }

  //   synth.speak(msg);
  //   setBool({ ...bool, [value]: !bool[value] });
  // };

  return (
    <li className="card ">
      <div className="p-3 bg-fuchsia-200">
        <h3 className="font-semibold text-xl">{note?.title}</h3>
      </div>
      {note?.image}
      <div className="px-3">
        <p className="note-context">{note?.content}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <button onClick={() => clickHandler("speaking")}>
              <FaReadme className="hover:text-yellow-300 active:text-yellow-500" />
            </button> */}
            <MdEditNote className="mx-2 hover:text-green-500 active:text-green-700" />
            <BsTrash3Fill className="hover:text-red-500 active:text-red-700" />
          </div>
          <p className="text-end text-xs text-dim">{date}</p>
        </div>
      </div>
    </li>
  );
}
