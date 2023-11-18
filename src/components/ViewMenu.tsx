import { Checkbox, CheckboxProvider, Group, GroupLabel } from "@ariakit/react";
import * as React from "react";
import { HIDE_OPTIONS, HIDE_VALUE } from "./constants";

interface IViewMenuProps {
  // view: "list" | "grid" | "simple" | "masonry";
  view: string;
  showInView: string[];
  onHideChange: (showInView: string[]) => void;
}
const ViewMenu: React.FC<IViewMenuProps> = ({
  view,
  showInView,
  onHideChange,
}) => {
  const handleHideChange = (value: string[]) => {
    console.log(value);
    const newHide = HIDE_VALUE.reduce((result: string[], item) => {
      if (!value.includes(item)) {
        result.push(`${view}_${item}`);
      }
      return result;
    }, []);
    onHideChange(newHide);
  };

  return (
    <>
      <div>
        <CheckboxProvider defaultValue={showInView} setValue={handleHideChange}>
          <Group>
            <GroupLabel>Show in {view}</GroupLabel>
            {HIDE_OPTIONS.map((o, index) => (
              <label key={index}>
                <Checkbox value={o.field} /> {o.display}
              </label>
            ))}
          </Group>
        </CheckboxProvider>
      </div>
    </>
  );
};

export default ViewMenu;
