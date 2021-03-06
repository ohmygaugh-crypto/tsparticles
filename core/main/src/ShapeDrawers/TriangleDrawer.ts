import { ISide, PolygonDrawerBase } from "./PolygonDrawerBase";
import type { ICoordinates } from "../Core/Interfaces/ICoordinates";
import type { IParticle } from "../Core/Interfaces/IParticle";

/**
 * @category Shape Drawers
 */
export class TriangleDrawer extends PolygonDrawerBase {
    public getSidesCount(): number {
        return 3;
    }

    public getSidesData(particle: IParticle, radius: number): ISide {
        return {
            count: {
                denominator: 2,
                numerator: 3,
            },
            length: radius * 2,
        };
    }

    public getCenter(particle: IParticle, radius: number): ICoordinates {
        return {
            x: -radius,
            y: radius / 1.66,
        };
    }
}
