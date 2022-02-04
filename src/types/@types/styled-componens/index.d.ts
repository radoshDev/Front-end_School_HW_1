declare module "styled-components/test-utils" {
	import { StyledComponent } from "styled-components"

	export function find(element: Element, component: StyledComponent): HTMLElement
}
