import "./typewriter/writer.css";
import Typewriter from "typewriter-effect";
import { useContext, useState } from "react";
import { TimeoutContext } from "./context/TimeoutContext";
export default function CodeBody() {
  const [size, setSize] = useState(true);
  const [firstType, setFirstType] = useState(true);
  const [line, setLine] = useState(false);
  const [secondType, setSecondType] = useState(false);
  const [thirdType, setThirdType] = useState(false);
  const { setFileExtension, fileExtension, setExecuteCode } =
    useContext(TimeoutContext);

  return (
    <div className="code-body">
      <div
        className={
          size
            ? `line-index class`
            : `line-index1 ${line ? "color-gray" : "color-white"}`
        }
      >
        1
        {line && (
          <div
            className={`line-index2 ${
              secondType ? "color-white" : "color-gray"
            }`}
          >
            2
          </div>
        )}
      </div>

      {firstType && (
        <Typewriter
          options={{ loop: false, delay: 80, deleteSpeed: 10 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(". . .")
              .deleteAll()
              .typeString(". . .")
              .deleteAll()
              .typeString(". . .")
              .deleteAll()
              .pauseFor(2000)
              .typeString("hello")
              .changeDelay(120)
              .typeString(" im ab and")
              .pauseFor(1000)
              .typeString(" oh...")
              .pauseFor(1000)
              .changeDelay(80)
              .typeString(" this font is too small hold on")
              .pauseFor(400)
              .deleteAll(20)
              .pauseFor(1000)
              .callFunction(() => {
                setSize(false);
                setFirstType(false);
              })
              .start();
          }}
        />
      )}
      <div class="second-type">
        {!firstType && fileExtension === false && (
          <Typewriter
            options={{
              loop: false,
              delay: 80,
              deleteSpeed: 50,
              wrapperClassName: "Typewriter__wrapper1",
              cursorClassName: "Typewriter__cursor1",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("hello im ab")
                .pauseFor(100)
                .typeString(".")
                .pauseFor(1000)
                .typeString(" i m")
                .deleteChars(2)
                .typeString(`'m`)
                .pauseFor(100)
                .typeString(" a front end developer")
                .pauseFor(1000)
                .deleteAll(2)
                .pauseFor(1000)
                .typeString("i really like to make cool looking websites!")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("just like this one ")
                .pauseFor(1000)
                .typeString(
                  '<img height="17px" src="https://static-cdn.jtvnw.net/jtv_user_pictures/5b447421-b733-451c-84db-5f52e545c0d2-profile_image-300x300.png" alt=""/>'
                )
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("please take a loke ao")
                .changeDeleteSpeed(20)
                .deleteChars(5)
                .typeString("ok around")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString("you can check out the projects i made")
                .pauseFor(3000)
                .deleteAll(1)
                .typeString("you also can stay here")
                .pauseFor(10000)
                .deleteAll(1)
                .typeString("want to see a magic trick? <br/>")
                .callFunction(() => {
                  setLine(true);
                })

                .callFunction(() => {
                  setSecondType(true);
                })
                .pauseFor(4000)
                .typeString('console.log("hello")')
                .pauseFor(4000)
                .typeString(" it is not working!")
                .pauseFor(2500)
                .typeString(" oh!")
                .pauseFor(1000)
                .changeDeleteSpeed(1)
                .deleteChars(48)
                .callFunction(() => {
                  setLine(false);
                })
                .deleteAll(1)
                .pauseFor(1000)
                .callFunction(() => {
                  setFileExtension(true);
                  setThirdType(true);
                })
                .pauseFor(1000)
                .start();
            }}
          />
        )}
        {thirdType && (
          <Typewriter
            options={{
              loop: false,
              delay: 80,
              deleteSpeed: 50,
              wrapperClassName: "Typewriter__wrapper1 console",
              cursorClassName: "Typewriter__cursor1",
            }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("console.log('have a nice day')")
                .callFunction(() => {
                  setExecuteCode(true);
                })
                .pauseFor(2000)
                .deleteAll(1)
                .typeString("kinda cool right?")
                .pauseFor(1000)
                .deleteAll(1)
                .typeString(" i think so")
                .pauseFor(1000)
                .deleteAll(1)
                .start();
            }}
          />
        )}
      </div>
    </div>
  );
}
////
////
