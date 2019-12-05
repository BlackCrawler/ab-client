import { IMessageHandler } from "../imessage-handler";
import { Events } from "../../events/constants";
import { IContext } from "../../app-context/icontext";
import { EventMessage } from "../../events/event-message";
import { ScoreBoardData } from "../../ab-protocol/src/types/packets-server";

export class ScoreBoardHandler implements IMessageHandler {

    handles = [Events.SCORE_BOARD];

    constructor(private context: IContext) {

    }

    exec(ev: EventMessage) {
        const data = ev.args as ScoreBoardData[];

        for (let playerScore of data) {
            const player = this.context.state.getPlayerById(playerScore.id);
            if (!player) {
                continue;
            }
            player.score = playerScore.score;
            player.level = playerScore.level;
        }
    }
}