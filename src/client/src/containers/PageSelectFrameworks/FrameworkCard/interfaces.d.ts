import { IOption } from "../../types/option";
import { IVSCodeObject } from "../../reducers/vscodeApiReducer";

import Select from "react-select/lib/Select";
import { ISelected } from "../../../types/selected";

interface ISelectProps {
  vscode: IVSCodeObject;
  framework:IOption;
  isFrontEnd:boolean;
}

interface IDispatchProps {
  setFrontendSelect: (framework: ISelected) => any;
  setBackendSelect: (framework: ISelected) => any;
  setDetailPage: (framework: IOption) => any;
  updateFrameworks: (frameworks: IOption[]) => any;
}

interface IStateProps {
  vscode: IVSCodeObject;
  isPreview: boolean;
  frontEndSelect: ISelected;
  backEndSelect: ISelected;
}

export { IStateProps, IDispatchProps, ISelectProps };
