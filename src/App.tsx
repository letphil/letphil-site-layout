import { Carousel, Hero, Navbar, Footer } from "./components/global";

export default function Playground() {
  return (
    <div>
      <Navbar />
      <Hero
        title="Letphil"
        description="Coding Saves Lives"
        buttonText="Click Here"
      />
      <Carousel />
      {/* first row */}
      <div className="flex w-full flex-col lg:flex-row p-4">
        <div className="card  rounded-box grid flex-grow place-items-center">
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>npm i letphil</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid  flex-grow place-items-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div
                className="artboard artboard-demo phone-1"
                style={{
                  width: 260,
                }}
              >
                this video will be up soon! 7pm est and we will share the code
                too
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className="flex w-full flex-col lg:flex-row p-4">
        <div className="card  rounded-box grid flex-grow place-items-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div
                className="artboard artboard-demo phone-1"
                style={{
                  width: 260,
                }}
              >
                this video will be up soon! 7pm est and we will share the code
                too
              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid flex-grow place-items-center">
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>npm i letphil</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
      </div>
      {/* third row */}
      <div className="flex w-full flex-col lg:flex-row p-4">
        <div className="card  rounded-box grid flex-grow place-items-center">
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>npm i letphil</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>installing...</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card rounded-box grid  flex-grow place-items-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div
                className="artboard artboard-demo phone-1"
                style={{
                  width: 260,
                }}
              >
                this video will be up soon! 7pm est and we will share the code
                too
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
