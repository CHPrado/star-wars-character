import { RouteComponentProps } from "react-router";
import { StaticContext } from "react-router";

import { CharacterProps } from "..";

interface StateProps {
  character: CharacterProps;
}

interface CharacterRouteProps
  extends RouteComponentProps<{}, StaticContext, StateProps> {}

export type { CharacterRouteProps };
