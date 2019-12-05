import { IMessageHandler } from "../handlers/imessage-handler";
import { LoginHandler } from "../handlers/server-messages/login-handler";
import { ScoreUpdateHandler } from "../handlers/server-messages/score-update-handler";
import { PlayerNewHandler } from "../handlers/server-messages/player-new-handler";
import { PlayerBounceHandler } from "../handlers/server-messages/player-bounce-handler";
import { PlayerBoostHandler } from "../handlers/server-messages/player-boost-handler";
import { PlayerUpdateHandler } from "../handlers/server-messages/player-update-handler";
import { TeamsHandler } from "../handlers/server-messages/teams-handler";
import { PlayerUpgradeHandler } from "../handlers/server-messages/player-upgrade-handler";
import { PlayerRespawnHandler } from "../handlers/server-messages/player-respawn-handler";
import { PlayerSwitchTypeHandler } from "../handlers/server-messages/player-switch-type-handler";
import { PlayerKilledHandler } from "../handlers/server-messages/player-killed-handler";
import { PlayerLeaveHandler } from "../handlers/server-messages/player-leave-handler";
import { PlayerFireHandler } from "../handlers/server-messages/player-fire-handler";
import { PlayerHitHandler } from "../handlers/server-messages/player-hit-handler";
import { ScoreBoardHandler } from "../handlers/server-messages/score-board-handler";
import { MiniMapHandler } from "../handlers/server-messages/mini-map-handler";
import { CrateNewHandler } from "../handlers/server-messages/crate-new-handler";
import { MissileUpdateHandler } from "../handlers/server-messages/missile-update-handler";
import { MountainHitHandler } from "../handlers/server-messages/mountain-hit-handler";
import { MobDespawnHandler } from "../handlers/server-messages/mob-despawn-handler";
import { PlayerRepelHandler } from "../handlers/server-messages/player-repel-handler";
import { PlayerStealthHandler } from "../handlers/server-messages/player-stealth-handler";
import { LeaveHorizonHandler } from "../handlers/server-messages/leave-horizon-handler";
import { PlayerPowerupHandler } from "../handlers/server-messages/player-powerup-handler";
import { ServerAnnouncementHandler } from "../handlers/server-messages/server-announcement-handler";
import { FlagUpdateHandler } from "../handlers/server-messages/flag-update-handler";
import { ServerCustomHandler } from "../handlers/server-messages/server-custom-handler";
import { ServerCommandReplyHandler } from "../handlers/server-messages/server-command-reply-handler";
import { ServerErrorHandler } from "../handlers/server-messages/server-error-handler";
import { PlayerChangeFlagHandler } from "../handlers/server-messages/player-change-flag-handler";
import { ScoreDetailedHandler } from "../handlers/server-messages/score-detailed-handler";
import { ServerMessageHandler } from "../handlers/server-message-handler";
import { IContext } from "./icontext";

export class HandlerCollections {
    static getDefaultHandlers(context: IContext): IMessageHandler[] {
        return [
            new CrateNewHandler(context),
            new FlagUpdateHandler(context),
            new LeaveHorizonHandler(context),
            new LoginHandler(context),
            new MiniMapHandler(context),
            new MissileUpdateHandler(context),
            new MobDespawnHandler(context),
            new MountainHitHandler(context),
            new PlayerBoostHandler(context),
            new PlayerBounceHandler(context),
            new PlayerChangeFlagHandler(context),
            new PlayerFireHandler(context),
            new PlayerHitHandler(context),
            new PlayerKilledHandler(context),
            new PlayerLeaveHandler(context),
            new PlayerNewHandler(context),
            new PlayerPowerupHandler(context),
            new PlayerRepelHandler(context),
            new PlayerRespawnHandler(context),
            new PlayerStealthHandler(context),
            new PlayerSwitchTypeHandler(context),
            new PlayerUpdateHandler(context),
            new PlayerUpgradeHandler(context),
            new ServerCommandReplyHandler(context),
            new ServerCustomHandler(context),
            new ServerErrorHandler(context),
            new ServerMessageHandler(context),
            new ServerAnnouncementHandler(context),
            new ScoreBoardHandler(context),
            new ScoreDetailedHandler(context),
            new ScoreUpdateHandler(context),
            new TeamsHandler(context),
        ];
    }

}