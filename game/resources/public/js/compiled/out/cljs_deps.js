goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../climbr/utils/macro_draft.js", ['climbr.utils.macro_draft'], ['cljs.core']);
goog.addDependency("../climbr/matter/matter.js", ['climbr.matter.matter'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/protocols.js", ['cljs.core.async.impl.protocols'], ['cljs.core']);
goog.addDependency("../cljs/core/async/impl/buffers.js", ['cljs.core.async.impl.buffers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/dispatch.js", ['cljs.core.async.impl.dispatch'], ['cljs.core', 'cljs.core.async.impl.buffers', 'goog.async.nextTick']);
goog.addDependency("../cljs/core/async/impl/channels.js", ['cljs.core.async.impl.channels'], ['cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/ioc_helpers.js", ['cljs.core.async.impl.ioc_helpers'], ['cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async/impl/timers.js", ['cljs.core.async.impl.timers'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.protocols']);
goog.addDependency("../cljs/core/async.js", ['cljs.core.async'], ['cljs.core.async.impl.channels', 'cljs.core.async.impl.dispatch', 'cljs.core', 'cljs.core.async.impl.buffers', 'cljs.core.async.impl.protocols', 'cljs.core.async.impl.ioc_helpers', 'cljs.core.async.impl.timers']);
goog.addDependency("../climbr/app_state.js", ['climbr.app_state'], ['cljs.core']);
goog.addDependency("../climbr/figures/climber.js", ['climbr.figures.climber'], ['climbr.matter.matter', 'cljs.core', 'climbr.app_state']);
goog.addDependency("../climbr/controls/keyboard.js", ['climbr.controls.keyboard'], ['cljs.core', 'cljs.core.async']);
goog.addDependency("../reagi/core.js", ['reagi.core'], ['cljs.core', 'cljs.core.async']);
goog.addDependency("../climbr/behaviour/position_watches.js", ['climbr.behaviour.position_watches'], ['cljs.core', 'reagi.core']);
goog.addDependency("../climbr/figures/boulders.js", ['climbr.figures.boulders'], ['climbr.matter.matter', 'cljs.core']);
goog.addDependency("../climbr/behaviour/climber_moves.js", ['climbr.behaviour.climber_moves'], ['climbr.matter.matter', 'cljs.core', 'cljs.core.async', 'climbr.app_state', 'climbr.figures.climber', 'climbr.controls.keyboard', 'climbr.behaviour.position_watches', 'climbr.figures.boulders']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../figwheel/client/utils.js", ['figwheel.client.utils'], ['cljs.core', 'clojure.string']);
goog.addDependency("../cljs/reader.js", ['cljs.reader'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../figwheel/client/socket.js", ['figwheel.client.socket'], ['cljs.core', 'figwheel.client.utils', 'cljs.reader']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../figwheel/client/file_reloading.js", ['figwheel.client.file_reloading'], ['goog.string', 'goog.net.jsloader', 'goog.Uri', 'cljs.core', 'goog.object', 'cljs.core.async', 'clojure.set', 'figwheel.client.utils', 'clojure.string']);
goog.addDependency("../figwheel/client/heads_up.js", ['figwheel.client.heads_up'], ['goog.string', 'cljs.core', 'cljs.core.async', 'figwheel.client.socket', 'clojure.string']);
goog.addDependency("../climbr/behaviour/utils.js", ['climbr.behaviour.utils'], ['cljs.core', 'climbr.app_state']);
goog.addDependency("../climbr/figures/ground.js", ['climbr.figures.ground'], ['climbr.matter.matter', 'cljs.core']);
goog.addDependency("../climbr/behaviour/user_actions.js", ['climbr.behaviour.user_actions'], ['climbr.matter.matter', 'cljs.core', 'cljs.core.async', 'climbr.app_state', 'climbr.controls.keyboard']);
goog.addDependency("../climbr/core.js", ['climbr.core'], ['climbr.matter.matter', 'cljs.core', 'climbr.figures.climber', 'climbr.figures.ground', 'climbr.figures.boulders', 'climbr.behaviour.climber_moves', 'climbr.behaviour.user_actions']);
goog.addDependency("../cljs/repl.js", ['cljs.repl'], ['cljs.core']);
goog.addDependency("../figwheel/client.js", ['figwheel.client'], ['goog.userAgent.product', 'goog.Uri', 'cljs.core', 'cljs.core.async', 'figwheel.client.file_reloading', 'figwheel.client.utils', 'cljs.repl', 'figwheel.client.heads_up', 'figwheel.client.socket', 'clojure.string']);
goog.addDependency("../figwheel/connect.js", ['figwheel.connect'], ['cljs.core', 'figwheel.client', 'climbr.core', 'figwheel.client.utils']);
goog.addDependency("../climbr/utils/utils.js", ['climbr.utils.utils'], ['cljs.core']);
