import { IMessageHandler } from "../imessage-handler";
import { Events } from "../../events/constants";
import { IContext } from "../../app-context/icontext";
import { EventMessage } from "../../events/event-message";
import { MobDespawn } from "../../ab-protocol/src/types/packets-server";

export class MobDespawnHandler implements IMessageHandler {

    handles = [Events.MOB_DESPAWN];

    constructor(private context: IContext) {

    }

    exec(ev: EventMessage) {
        const msg = ev.args as MobDespawn;
        this.context.state.removeMob(msg.id);
    }
}