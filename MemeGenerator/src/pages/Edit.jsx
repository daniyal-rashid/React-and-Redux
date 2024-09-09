import React, { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const memeRef = createRef();
  const [count, setCount] = useState(0);
  const [params] = useSearchParams();

  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div ref={memeRef} className="meme mt-5 mb-5">
        <img
          src={params.get("url")}
          style={{ width: "300px", margin: "20px" }}
        />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Add text</Button>
      <Button
        variant="success"
        className="mx-4"
        onClick={() => exportComponentAsJPEG(memeRef)}
      >
        Save
      </Button>
    </div>
  );
};

export default EditPage;
