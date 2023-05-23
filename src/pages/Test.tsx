import { useEffect, useState, memo, useCallback, useMemo, useRef } from "react";

const fetchData = async () => {
  return 0;
};

export const TestScreen = () => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);

  const superCounter = useRef(0);

  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setLoading(false);
    });
  }, []);

  const valueFunc = () => {};

  const valuememoFunc = useCallback(() => {}, []);

  const hardCalculatedValue = useMemo(() => {
    return 5000 * value;
  }, [value]);

  if (loading) {
    return <p>Loading</p>;
  }

  console.log("render page");

  return (
    <div>
      <p>Content</p>
      <button
        onClick={() => {
          setCounter((p) => p + 1);
        }}
      >
        click me setCounter
      </button>
      <p
        style={{ color: "red" }}
      >{`superCounter.current ${superCounter.current}`}</p>
      <button
        onClick={() => {
          superCounter.current = superCounter.current + 1;
        }}
      >
        click me useRef
      </button>
      <br />
      <Form />

      <ComponentA valueStr={23} valueFunc={valuememoFunc} />
    </div>
  );
};

const Form = () => {
  const [text, setText] = useState("text1");
  const [text2, setText2] = useState("text2");

  console.log("render Form");

  return (
    <>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <br />
      <input
        value={text2}
        onChange={(e) => {
          setText2(e.target.value);
        }}
      />
      <br />
    </>
  );
};

const ComponentA = memo(({ valueStr, valueFunc }: any) => {
  console.log("render memocomponent", { valueStr, valueFunc });

  return <p style={{ color: "red" }}>Memo component</p>;
});
