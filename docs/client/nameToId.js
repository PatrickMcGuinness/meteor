// get the docs id from the name
nameToId = {
  "Accounts.onLogin": "accounts_onlogin",
  "Meteor.isClient": "meteor_isclient",
  "Meteor.isServer": "meteor_isserver",
  "Meteor.startup": "meteor_startup",
  "Meteor.users": "meteor_users",
  "Tracker.autorun": "tracker_autorun",
  "Mongo.Collection#find": "find",
  "Meteor.status": "meteor_status",
  "Meteor.user": "meteor_user",
  "Meteor.userId": "meteor_userid",
  "Meteor.loggingIn": "meteor_loggingin",
  "Mongo.Cursor#observe": "observe",
  "Mongo.Cursor#observeChanges": "observe_changes",
  "Subscription#added": "publish_added",
  "Subscription#changed": "publish_changed",
  "Subscription#removed": "publish_removed",
  "Subscription#ready": "publish_ready",
  "Meteor.Error": "meteor_error",
  "Meteor.onConnection": "meteor_onconnection",
  "Mongo.Collection": "mongo_collection",
  "Mongo.Collection#insert": "insert",
  "Mongo.Collection#update": "update",
  "Mongo.Collection#remove": "remove",
  "Meteor.reconnect": "meteor_reconnect",
  "Meteor.methods": "meteor_methods",
  "Meteor.disconnect": "meteor_disconnect",
  "DDP.connect": "ddp_connect",
  "Mongo.ObjectID": "mongo_object_id",
  "Mongo.Collection#allow": "allow",
  "Meteor.publish": "meteor_publish",
  "Mongo.Collection#deny": "deny",
  "Mongo.Collection#upsert": "upsert",
  "Mongo.Cursor#forEach": "foreach",
  "Mongo.Cursor#map": "map",
  "Mongo.Cursor#fetch": "fetch",
  "EJSON.equals": "ejson_equals",
  "Mongo.Collection#findOne": "findone",
  "Session.get": "session_get",
  "Session.set": "session_set",
  "Subscription#userId": "publish_userId",
  "MethodInvocation#userId": "method_userId",
  "Accounts.verifyEmail": "accounts_verifyemail",
  "Accounts.forgotPassword": "accounts_forgotpassword",
  "Accounts.createUser": "accounts_createuser",
  "Accounts.validateLoginAttempt": "accounts_validateloginattempt",
  "Accounts.onLoginFailure": "accounts_onloginfailure",
  "Accounts.setPassword": "accounts_setpassword",
  "Accounts.sendEnrollmentEmail": "accounts_sendenrollmentemail",
  "Accounts.onCreateUser": "accounts_oncreateuser",
  "Accounts.sendResetPasswordEmail": "accounts_sendresetpasswordemail",
  "Accounts.resetPassword": "accounts_resetpassword",
  "Accounts.sendVerificationEmail": "accounts_sendverificationemail",
  "Accounts.emailTemplates": "accounts_emailtemplates",
  "Tracker.flush": "tracker_flush",
  "Tracker.afterFlush": "tracker_afterflush",
  "Tracker.active": "tracker_active",
  "Tracker.Dependency#depend": "dependency_depend",
  "Tracker.onInvalidate": "tracker_oninvalidate",
  "Tracker.Computation#onInvalidate": "computation_oninvalidate",
  "Tracker.Computation#stop": "computation_stop",
  "Tracker.currentComputation": "tracker_currentcomputation",
  "Session.equals": "session_equals",
  "EJSON.newBinary": "ejson_new_binary",
  "EJSON.addType": "ejson_add_type",
  "MethodInvocation#unblock": "method_unblock",
  "Accounts.ui.config": "accounts_ui_config",
  "Meteor.settings": "meteor_settings",
  "undefined": "meteorpublishforarch",
  "Meteor.absoluteUrl": "meteor_absoluteurl",
  "Meteor.release": "meteor_release",
  "Subscription#onStop": "publish_onstop",
  "Subscription#error": "publish_error",
  "Subscription#stop": "publish_stop",
  "Subscription#connection": "publish_connection",
  "MethodInvocation#setUserId": "method_setUserId",
  "MethodInvocation#isSimulation": "method_issimulation",
  "MethodInvocation#connection": "method_connection",
  "Mongo.Cursor#count": "count",
  "Session.setDefault": "session_set_default",
  "Meteor.logout": "meteor_logout",
  "Meteor.logoutOtherClients": "meteor_logoutotherclients",
  "Meteor.loginWithPassword": "meteor_loginwithpassword",
  "Accounts.config": "accounts_config",
  "Accounts.validateNewUser": "accounts_validatenewuser",
  "Accounts.changePassword": "accounts_changepassword",
  "Meteor.setTimeout": "meteor_settimeout",
  "Meteor.setInterval": "meteor_setinterval",
  "Meteor.clearTimeout": "meteor_cleartimeout",
  "Meteor.clearInterval": "meteor_clearinterval",
  "Tracker.nonreactive": "tracker_nonreactive",
  "Tracker.Computation#invalidate": "computation_invalidate",
  "Tracker.Computation#stopped": "computation_stopped",
  "Tracker.Computation#invalidated": "computation_invalidated",
  "Tracker.Computation#firstRun": "computation_firstrun",
  "Tracker.Dependency#changed": "dependency_changed",
  "Tracker.Dependency#hasDependents": "dependency_hasdependents",
  "EJSON.parse": "ejson_parse",
  "EJSON.stringify": "ejson_stringify",
  "EJSON.fromJSONValue": "ejson_from_json_value",
  "EJSON.toJSONValue": "ejson_to_json_value",
  "EJSON.clone": "ejson_clone",
  "EJSON.isBinary": "ejson_is_binary",
  "HTTP.call": "http_call",
  "Meteor.isCordova": "meteor_iscordova",
  "Template#events": "template_events",
  "Template#helpers": "template_helpers",
  "Template#rendered": "template_rendered",
  "Template#created": "template_created",
  "Template#destroyed": "template_destroyed",
  "Blaze.TemplateInstance#findAll": "template_findAll",
  "Blaze.TemplateInstance#$": "template_$",
  "Blaze.TemplateInstance#find": "template_find",
  "Blaze.TemplateInstance#firstNode": "template_firstNode",
  "Blaze.TemplateInstance#lastNode": "template_lastNode",
  "Blaze.TemplateInstance#data": "template_data",
  "Blaze.TemplateInstance#autorun": "template_autorun",
  "Blaze.TemplateInstance#view": "template_view",
  "Template.registerHelper": "template_registerhelper",
  "Template.instance": "template_instance",
  "Template.currentData": "template_currentdata",
  "Template.parentData": "template_parentdata",
  "Template.body": "template_body",
  "ReactiveVar": "reactivevar",
  "ReactiveVar#get": "reactivevar_get",
  "ReactiveVar#set": "reactivevar_set",
  "HTTP.get": "http_get",
  "HTTP.post": "http_post",
  "HTTP.put": "http_put",
  "HTTP.del": "http_del",
  "Email.send": "email_send",
  "Assets.getText": "assets_getText",
  "Assets.getBinary": "assets_getBinary",
  "Blaze.render": "blaze_render",
  "Blaze.renderWithData": "blaze_renderwithdata",
  "Blaze.View": "blaze_view",
  "Blaze.remove": "blaze_remove",
  "Blaze.getData": "blaze_getdata",
  "Blaze.toHTML": "blaze_tohtml",
  "Blaze.toHTMLWithData": "blaze_tohtmlwithdata",
  "Blaze.currentView": "blaze_currentview",
  "Blaze.getView": "blaze_getview",
  "Blaze.With": "blaze_with",
  "Blaze.If": "blaze_if",
  "Blaze.Unless": "blaze_unless",
  "Blaze.Each": "blaze_each",
  "Blaze.Template": "blaze_template",
  "Blaze.isTemplate": "blaze_istemplate",
  "Meteor.subscribe": "meteor_subscribe",
  "Meteor.call": "meteor_call",
  "Meteor.apply": "meteor_apply",
  "PackageAPI#versionsFrom": "pack_versions",
  "PackageAPI#imply": "pack_api_imply",
  "PackageAPI#export": "pack_export",
  "PackageAPI#addFiles": "pack_addFiles"

};
