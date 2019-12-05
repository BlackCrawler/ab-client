import { IMessageHandler } from "../imessage-handler";
import { Events } from "../../events/constants";
import { IContext } from "../../app-context/icontext";
import { EventMessage } from "../../events/event-message";
import { Error } from "../../ab-protocol/src/types/packets-server";

export class ServerErrorHandler implements IMessageHandler {

    handles = [Events.SERVER_ERROR];

    constructor(private context: IContext) {

    }

    exec(ev: EventMessage) {
        const msg = ev.args as Error;

        this.context.logger.error("Server reports error: " + msg.error);
    }
}