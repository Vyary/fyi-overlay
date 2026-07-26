import { createSignal } from "solid-js";
import { BaseWidget } from "./BaseWidget";

function TestWidget() {
  const [show, setShow] = createSignal(true);
  return (
    <BaseWidget name="test" show={show}>
      <div>hi</div>
    </BaseWidget>
  );
}

export { TestWidget };
