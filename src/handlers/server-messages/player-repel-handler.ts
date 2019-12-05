import { IMessageHandler } from "../imessage-handler";
import { Events } from "../../events/constants";
import { IContext } from "../../app-context/icontext";
import { EventMessage } from "../../events/event-message";
import { EventRepel } from "../../ab-protocol/src/types/packets-server";
import { Pos } from "../../models/pos";
import { Decoder } from "../../helpers/decoder";

export class PlayerRepelHandler implements IMessageHandler {

    handles = [Events.PLAYER_REPEL];

    constructor(private context: IContext) {

    }

    exec(ev: EventMessage) {
        const msg = ev.args as EventRepel;

        const player = this.context.state.getPlayerById(msg.id);
        if (player) {
            player.pos.x = msg.posX;
            player.pos.y = msg.posY;
            player.rot = msg.rot;
            player.speed = new Pos(msg.speedX, msg.speedY);
            player.energyRegen = msg.energyRegen;
            player.energy = msg.energy;
        }

        for (const repelledPlayer of msg.players) {
            const p = this.context.state.getPlayerById(repelledPlayer.id);

            if (!p) {
                continue;
            }

            const movements = Decoder.keystateToPlayerMovements(repelledPlayer.keystate);
            if (movements) {
                p.boost = movements.boost;
                p.flagspeed = movements.flagspeed;
                p.stealthed = movements.stealthed;
                p.strafe = movements.strafe;
                p.keystate = movements.keystate;
            }
            p.pos.x = repelledPlayer.posX;
            p.pos.y = repelledPlayer.posY;
            p.rot = repelledPlayer.rot;
            p.speed = new Pos(repelledPlayer.speedX, repelledPlayer.speedY);
            p.energyRegen = repelledPlayer.energyRegen;
            p.energy = repelledPlayer.energy;
            p.health = repelledPlayer.playerHealth;
            p.healthRegen = repelledPlayer.playerHealthRegen;
        }

        for (const missile of msg.mobs) {
            const mob = this.context.state.getMobById(missile.id);

            if (!mob) {
                continue;
            }
            
            mob.pos = new Pos(missile.posX, missile.posY);
            mob.accel = new Pos(missile.accelX, missile.accelY);
            mob.maxSpeed = missile.maxSpeed;
            mob.speed = new Pos(missile.speedX, missile.speedY);
            mob.mobType = missile.type;
            mob.ownerId = msg.id;
        }

    }
}