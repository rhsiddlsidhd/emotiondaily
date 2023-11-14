import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import React, { useReducer, useRef } from "react";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의일기 1번",
    date: 1699860436082,
  },

  {
    id: 2,
    emotion: 2,
    content: "오늘의일기 2번",
    date: 1699860436083,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의일기 3번",
    date: 1699860436084,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의일기 4번",
    date: 1699860436085,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의일기 5번",
    date: 1699860436086,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  //현재 시간을 밀리초 단위로 나타내는것
  // console.log("여기요", new Date().getTime());

  const dataId = useRef(6);
  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "Remove", targetId });
  };
  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
              {/* pathvariable*/}
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();
