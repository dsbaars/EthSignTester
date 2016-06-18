System.config({
  baseURL: "/EthSignTester/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "jspm-react-component/": "src/"
  },
  bundles: {
    "production.js": [
      "app/app.js",
      "app/app.component.js",
      "app/default/default.js",
      "npm:ethereumjs-util@4.4.1.js",
      "npm:ethereumjs-util@4.4.1/index.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:create-hash@1.1.2.js",
      "npm:create-hash@1.1.2/browser.js",
      "npm:cipher-base@1.0.2.js",
      "npm:cipher-base@1.0.2/index.js",
      "github:jspm/nodelibs-string_decoder@0.1.0.js",
      "github:jspm/nodelibs-string_decoder@0.1.0/index.js",
      "npm:string_decoder@0.10.31.js",
      "npm:string_decoder@0.10.31/index.js",
      "npm:inherits@2.0.1.js",
      "npm:inherits@2.0.1/inherits_browser.js",
      "github:jspm/nodelibs-stream@0.1.0.js",
      "github:jspm/nodelibs-stream@0.1.0/index.js",
      "npm:stream-browserify@1.0.0.js",
      "npm:stream-browserify@1.0.0/index.js",
      "npm:readable-stream@1.1.14/passthrough.js",
      "npm:readable-stream@1.1.14/lib/_stream_passthrough.js",
      "npm:core-util-is@1.0.2.js",
      "npm:core-util-is@1.0.2/lib/util.js",
      "npm:readable-stream@1.1.14/lib/_stream_transform.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.5.js",
      "npm:process@0.11.5/browser.js",
      "npm:readable-stream@1.1.14/lib/_stream_duplex.js",
      "npm:readable-stream@1.1.14/lib/_stream_writable.js",
      "npm:readable-stream@1.1.14/lib/_stream_readable.js",
      "github:jspm/nodelibs-events@0.1.1.js",
      "github:jspm/nodelibs-events@0.1.1/index.js",
      "npm:events@1.0.2.js",
      "npm:events@1.0.2/events.js",
      "npm:isarray@0.0.1.js",
      "npm:isarray@0.0.1/index.js",
      "npm:readable-stream@1.1.14/transform.js",
      "npm:readable-stream@1.1.14/duplex.js",
      "npm:readable-stream@1.1.14/writable.js",
      "npm:readable-stream@1.1.14/readable.js",
      "npm:sha.js@2.4.5.js",
      "npm:sha.js@2.4.5/index.js",
      "npm:sha.js@2.4.5/sha512.js",
      "npm:sha.js@2.4.5/hash.js",
      "npm:sha.js@2.4.5/sha384.js",
      "npm:sha.js@2.4.5/sha256.js",
      "npm:sha.js@2.4.5/sha224.js",
      "npm:sha.js@2.4.5/sha1.js",
      "npm:sha.js@2.4.5/sha.js",
      "npm:ripemd160@1.0.1.js",
      "npm:ripemd160@1.0.1/lib/ripemd160.js",
      "npm:create-hash@1.1.2/md5.js",
      "npm:create-hash@1.1.2/helpers.js",
      "npm:bn.js@4.11.4.js",
      "npm:bn.js@4.11.4/lib/bn.js",
      "npm:rlp@2.0.0.js",
      "npm:rlp@2.0.0/index.js",
      "github:jspm/nodelibs-assert@0.1.0.js",
      "github:jspm/nodelibs-assert@0.1.0/index.js",
      "npm:assert@1.4.1.js",
      "npm:assert@1.4.1/assert.js",
      "npm:util@0.10.3.js",
      "npm:util@0.10.3/util.js",
      "npm:util@0.10.3/support/isBufferBrowser.js",
      "npm:secp256k1@3.1.0.js",
      "npm:secp256k1@3.1.0/index.js",
      "npm:secp256k1@3.1.0/elliptic.js",
      "npm:secp256k1@3.1.0/lib/elliptic/index.js",
      "npm:secp256k1@3.1.0/lib/messages.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:elliptic@6.3.1.js",
      "npm:elliptic@6.3.1/lib/elliptic.js",
      "npm:elliptic@6.3.1/lib/elliptic/eddsa/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/eddsa/signature.js",
      "npm:elliptic@6.3.1/lib/elliptic/eddsa/key.js",
      "npm:hash.js@1.0.3.js",
      "npm:hash.js@1.0.3/lib/hash.js",
      "npm:hash.js@1.0.3/lib/hash/hmac.js",
      "npm:hash.js@1.0.3/lib/hash/ripemd.js",
      "npm:hash.js@1.0.3/lib/hash/sha.js",
      "npm:hash.js@1.0.3/lib/hash/common.js",
      "npm:hash.js@1.0.3/lib/hash/utils.js",
      "npm:elliptic@6.3.1/lib/elliptic/ec/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/ec/signature.js",
      "npm:elliptic@6.3.1/lib/elliptic/ec/key.js",
      "npm:elliptic@6.3.1/lib/elliptic/curves.js",
      "npm:elliptic@6.3.1/lib/elliptic/precomputed/secp256k1.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/edwards.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/mont.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/short.js",
      "npm:elliptic@6.3.1/lib/elliptic/curve/base.js",
      "npm:elliptic@6.3.1/lib/elliptic/hmac-drbg.js",
      "npm:brorand@1.0.5.js",
      "npm:brorand@1.0.5/index.js",
      "npm:elliptic@6.3.1/lib/elliptic/utils.js",
      "npm:elliptic@6.3.1/package.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:secp256k1@3.1.0/lib/index.js",
      "npm:secp256k1@3.1.0/lib/assert.js",
      "npm:bip66@1.1.4.js",
      "npm:bip66@1.1.4/index.js",
      "npm:secp256k1@3.1.0/bindings.js",
      "npm:bindings@1.2.1.js",
      "npm:bindings@1.2.1/bindings.js",
      "github:jspm/nodelibs-path@0.1.0.js",
      "github:jspm/nodelibs-path@0.1.0/index.js",
      "npm:path-browserify@0.0.0.js",
      "npm:path-browserify@0.0.0/index.js",
      "github:jspm/nodelibs-fs@0.1.2.js",
      "github:jspm/nodelibs-fs@0.1.2/index.js",
      "npm:keccakjs@0.2.1.js",
      "npm:keccakjs@0.2.1/browser.js",
      "npm:browserify-sha3@0.0.1.js",
      "npm:browserify-sha3@0.0.1/index.js",
      "npm:js-sha3@0.3.1.js",
      "npm:js-sha3@0.3.1/src/sha3.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/index.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/router.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/router_providers.js",
      "npm:@angular/common@2.0.0-rc.1.js",
      "npm:@angular/common@2.0.0-rc.1/index.js",
      "npm:@angular/common@2.0.0-rc.1/src/location.js",
      "npm:@angular/common@2.0.0-rc.1/src/location/location.js",
      "npm:@angular/common@2.0.0-rc.1/src/location/location_strategy.js",
      "npm:@angular/core@2.0.0-rc.1.js",
      "npm:@angular/core@2.0.0-rc.1/index.js",
      "npm:@angular/core@2.0.0-rc.1/private_export.js",
      "npm:@angular/core@2.0.0-rc.1/src/console.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/decorators.js",
      "npm:@angular/core@2.0.0-rc.1/src/util/decorators.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/lang.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/metadata.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/provider_util.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/provider.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/exceptions.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/exception_handler.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/collection.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/base_wrapped_exception.js",
      "npm:@angular/core@2.0.0-rc.1/src/debug/debug_renderer.js",
      "npm:@angular/core@2.0.0-rc.1/src/debug/debug_node.js",
      "npm:@angular/core@2.0.0-rc.1/src/reflection/reflection_capabilities.js",
      "npm:@angular/core@2.0.0-rc.1/src/profile/wtf_init.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/template_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/render/api.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/change_detection_util.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/debug_context.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/view_type.js",
      "npm:@angular/core@2.0.0-rc.1/src/metadata/view.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/view_utils.js",
      "npm:@angular/core@2.0.0-rc.1/src/application_tokens.js",
      "npm:@angular/core@2.0.0-rc.1/src/di.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/opaque_token.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/reflective_exceptions.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/reflective_key.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/forward_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/reflective_provider.js",
      "npm:@angular/core@2.0.0-rc.1/src/reflection/reflection.js",
      "npm:@angular/core@2.0.0-rc.1/src/reflection/reflector.js",
      "npm:@angular/core@2.0.0-rc.1/src/reflection/reflector_reader.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/reflective_injector.js",
      "npm:@angular/core@2.0.0-rc.1/src/di/injector.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/change_detection.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/change_detector_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/constants.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/differs/default_keyvalue_differ.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/differs/keyvalue_differs.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/differs/default_iterable_differ.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection/differs/iterable_differs.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/exceptions.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/element.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/view_container_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/profile/profile.js",
      "npm:@angular/core@2.0.0-rc.1/src/profile/wtf_impl.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/element_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/security.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/view.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/element_injector.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/view_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/async.js",
      "npm:rxjs@5.0.0-beta.6/Observable.js",
      "npm:rxjs@5.0.0-beta.6/util/toSubscriber.js",
      "npm:rxjs@5.0.0-beta.6/symbol/rxSubscriber.js",
      "npm:rxjs@5.0.0-beta.6/util/root.js",
      "npm:rxjs@5.0.0-beta.6/Subscriber.js",
      "npm:rxjs@5.0.0-beta.6/Observer.js",
      "npm:rxjs@5.0.0-beta.6/Subscription.js",
      "npm:rxjs@5.0.0-beta.6/util/UnsubscriptionError.js",
      "npm:rxjs@5.0.0-beta.6/util/errorObject.js",
      "npm:rxjs@5.0.0-beta.6/util/tryCatch.js",
      "npm:rxjs@5.0.0-beta.6/util/isFunction.js",
      "npm:rxjs@5.0.0-beta.6/util/isObject.js",
      "npm:rxjs@5.0.0-beta.6/util/isArray.js",
      "npm:rxjs@5.0.0-beta.6/symbol/observable.js",
      "npm:rxjs@5.0.0-beta.6/operator/toPromise.js",
      "npm:rxjs@5.0.0-beta.6/observable/PromiseObservable.js",
      "npm:rxjs@5.0.0-beta.6/Subject.js",
      "npm:rxjs@5.0.0-beta.6/util/ObjectUnsubscribedError.js",
      "npm:rxjs@5.0.0-beta.6/util/throwError.js",
      "npm:rxjs@5.0.0-beta.6/SubjectSubscription.js",
      "npm:@angular/core@2.0.0-rc.1/src/facade/promise.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/component_resolver.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/component_factory.js",
      "npm:@angular/core@2.0.0-rc.1/src/metadata/lifecycle_hooks.js",
      "npm:@angular/core@2.0.0-rc.1/src/application_common_providers.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/dynamic_component_loader.js",
      "npm:@angular/core@2.0.0-rc.1/src/application_ref.js",
      "npm:@angular/core@2.0.0-rc.1/src/testability/testability.js",
      "npm:@angular/core@2.0.0-rc.1/src/zone/ng_zone.js",
      "npm:@angular/core@2.0.0-rc.1/src/zone/ng_zone_impl.js",
      "npm:@angular/core@2.0.0-rc.1/src/platform_common_providers.js",
      "npm:@angular/core@2.0.0-rc.1/src/platform_directives_and_pipes.js",
      "npm:@angular/core@2.0.0-rc.1/src/change_detection.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker.js",
      "npm:@angular/core@2.0.0-rc.1/src/linker/query_list.js",
      "npm:@angular/core@2.0.0-rc.1/src/render.js",
      "npm:@angular/core@2.0.0-rc.1/src/zone.js",
      "npm:@angular/core@2.0.0-rc.1/src/util.js",
      "npm:@angular/core@2.0.0-rc.1/src/metadata.js",
      "npm:@angular/core@2.0.0-rc.1/src/metadata/directives.js",
      "npm:@angular/core@2.0.0-rc.1/src/metadata/di.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/async.js",
      "npm:rxjs@5.0.0-beta.8/Observable.js",
      "npm:symbol-observable@0.2.4.js",
      "npm:symbol-observable@0.2.4/index.js",
      "npm:symbol-observable@0.2.4/ponyfill.js",
      "npm:rxjs@5.0.0-beta.8/util/toSubscriber.js",
      "npm:rxjs@5.0.0-beta.8/symbol/rxSubscriber.js",
      "npm:rxjs@5.0.0-beta.8/util/root.js",
      "npm:rxjs@5.0.0-beta.8/Subscriber.js",
      "npm:rxjs@5.0.0-beta.8/Observer.js",
      "npm:rxjs@5.0.0-beta.8/Subscription.js",
      "npm:rxjs@5.0.0-beta.8/util/UnsubscriptionError.js",
      "npm:rxjs@5.0.0-beta.8/util/errorObject.js",
      "npm:rxjs@5.0.0-beta.8/util/tryCatch.js",
      "npm:rxjs@5.0.0-beta.8/util/isFunction.js",
      "npm:rxjs@5.0.0-beta.8/util/isObject.js",
      "npm:rxjs@5.0.0-beta.8/util/isArray.js",
      "npm:rxjs@5.0.0-beta.8/operator/toPromise.js",
      "npm:rxjs@5.0.0-beta.8/observable/PromiseObservable.js",
      "npm:rxjs@5.0.0-beta.8/Subject.js",
      "npm:rxjs@5.0.0-beta.8/SubjectSubscription.js",
      "npm:rxjs@5.0.0-beta.8/util/ObjectUnsubscribedError.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/promise.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/lang.js",
      "npm:@angular/common@2.0.0-rc.1/src/location/path_location_strategy.js",
      "npm:@angular/common@2.0.0-rc.1/src/location/platform_location.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/exceptions.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/exception_handler.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/collection.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/base_wrapped_exception.js",
      "npm:@angular/common@2.0.0-rc.1/src/location/hash_location_strategy.js",
      "npm:@angular/common@2.0.0-rc.1/src/common_directives.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/core_directives.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_plural.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_switch.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_style.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_template_outlet.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_if.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_for.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/ng_class.js",
      "npm:@angular/common@2.0.0-rc.1/src/directives/observable_list_diff.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/radio_control_value_accessor.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_control.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/abstract_control_directive.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/control_value_accessor.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/form_builder.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/model.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/validators.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/validators.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/select_control_value_accessor.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_control_status.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/number_value_accessor.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/checkbox_value_accessor.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/default_value_accessor.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_form.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/shared.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/normalize_validator.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/control_container.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_form_model.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_control_group.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_model.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_form_control.js",
      "npm:@angular/common@2.0.0-rc.1/src/forms/directives/ng_control_name.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/common_pipes.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/i18n_select_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/invalid_pipe_argument_exception.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/i18n_plural_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/replace_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/number_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/facade/intl.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/date_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/slice_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/json_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/lowercase_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/uppercase_pipe.js",
      "npm:@angular/common@2.0.0-rc.1/src/pipes/async_pipe.js",
      "npm:@angular/platform-browser@2.0.0-rc.1.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/index.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/platform_browser.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/platform_browser_static.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/location/browser_platform_location.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/dom_adapter.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/lang.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/debug/ng_probe.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/dom_renderer.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/util.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/dom_tokens.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/events/event_manager.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/collection.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/exceptions.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/exception_handler.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/base_wrapped_exception.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/shared_styles_host.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/animate/animation_builder.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/animate/browser_details.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/math.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/animate/css_animation_builder.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/animate/animation.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/animate/css_animation_options.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/core_private.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser_common.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/debug/by.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/tools/tools.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/tools/common_tools.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/facade/browser.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/title.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/events/hammer_gestures.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/events/hammer_common.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/events/dom_events.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/dom/events/key_events.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/testability.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/browser_adapter.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/browser/generic_browser_adapter.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/security/dom_sanitization_service.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/security/style_sanitizer.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/src/security/url_sanitizer.js",
      "npm:@angular/platform-browser@2.0.0-rc.1/private_export.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/router_providers_common.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/exceptions.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/exception_handler.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/collection.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/lang.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/base_wrapped_exception.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/route_registry.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/url_parser.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/route_config/route_config_normalizer.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/route_config/route_config_decorator.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/core_private.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/route_config/route_config_impl.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/instruction.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/async.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/facade/promise.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/rule_set.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/route_paths/regex_route_path.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/route_paths/route_path.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/route_paths/param_route_path.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/utils.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/route_handlers/sync_route_handler.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/route_handlers/async_route_handler.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/rules/rules.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/router.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/lifecycle/route_lifecycle_reflector.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/lifecycle/lifecycle_annotations_impl.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/lifecycle/lifecycle_annotations.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/directives/router_link.js",
      "npm:@angular/router-deprecated@2.0.0-rc.1/src/directives/router_outlet.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:bootstrap@4.0.0-alpha.2/scss/bootstrap.scss!github:mobilexag/plugin-sass@0.4.4.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/index.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/platform_browser_dynamic.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/core_private.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/xhr/xhr_impl.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/facade/lang.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/facade/promise.js",
      "npm:@angular/compiler@2.0.0-rc.1.js",
      "npm:@angular/compiler@2.0.0-rc.1/index.js",
      "npm:@angular/compiler@2.0.0-rc.1/compiler.js",
      "npm:@angular/compiler@2.0.0-rc.1/private_export.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/path_util.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/lang.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/exceptions.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/exception_handler.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/collection.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/base_wrapped_exception.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/selector.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/template_ast.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/compiler.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/expression_parser/lexer.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/expression_parser/parser.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/expression_parser/ast.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/schema/dom_element_schema_registry.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/schema/element_schema_registry.js",
      "npm:@angular/compiler@2.0.0-rc.1/core_private.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/view_compiler.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/config.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/identifiers.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/util.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/compile_metadata.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/url_resolver.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/view_binder.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/lifecycle_binder.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/constants.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/output_ast.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/event_binder.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/compile_binding.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/expression_converter.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/compile_method.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/property_binder.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/view_builder.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/util.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/compile_element.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/compile_query.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/compile_view.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_compiler/compile_pipe.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/style_compiler.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/style_url_resolver.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/shadow_css.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/metadata_resolver.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/assertions.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/directive_lifecycle_reflector.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/view_resolver.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/pipe_resolver.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/directive_resolver.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/directive_normalizer.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/template_preparser.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/html_tags.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/html_parser.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/parse_util.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/html_lexer.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/html_ast.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/xhr.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/async.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/facade/promise.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/runtime_compiler.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/interpretive_view.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/output_interpreter.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/ts_emitter.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/abstract_emitter.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/dart_emitter.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/output_jit.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/output/abstract_js_emitter.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/template_parser.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/provider_parser.js",
      "npm:@angular/compiler@2.0.0-rc.1/src/offline_compiler.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/xhr/xhr_cache.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/facade/exceptions.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/facade/exception_handler.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/facade/collection.js",
      "npm:@angular/platform-browser-dynamic@2.0.0-rc.1/src/facade/base_wrapped_exception.js",
      "npm:reflect-metadata@0.1.3.js",
      "npm:reflect-metadata@0.1.3/Reflect.js",
      "github:jspm/nodelibs-crypto@0.1.0.js",
      "github:jspm/nodelibs-crypto@0.1.0/index.js",
      "npm:crypto-browserify@3.11.0.js",
      "npm:crypto-browserify@3.11.0/index.js",
      "npm:public-encrypt@4.0.0.js",
      "npm:public-encrypt@4.0.0/browser.js",
      "npm:public-encrypt@4.0.0/privateDecrypt.js",
      "npm:public-encrypt@4.0.0/withPublic.js",
      "npm:browserify-rsa@4.0.1.js",
      "npm:browserify-rsa@4.0.1/index.js",
      "npm:randombytes@2.0.3.js",
      "npm:randombytes@2.0.3/browser.js",
      "npm:public-encrypt@4.0.0/xor.js",
      "npm:public-encrypt@4.0.0/mgf.js",
      "npm:parse-asn1@5.0.0.js",
      "npm:parse-asn1@5.0.0/index.js",
      "npm:pbkdf2@3.0.4.js",
      "npm:pbkdf2@3.0.4/browser.js",
      "npm:create-hmac@1.1.4.js",
      "npm:create-hmac@1.1.4/browser.js",
      "npm:browserify-aes@1.0.6.js",
      "npm:browserify-aes@1.0.6/browser.js",
      "npm:browserify-aes@1.0.6/modes.js",
      "npm:browserify-aes@1.0.6/decrypter.js",
      "npm:browserify-aes@1.0.6/modes/ctr.js",
      "npm:buffer-xor@1.0.3.js",
      "npm:buffer-xor@1.0.3/index.js",
      "npm:browserify-aes@1.0.6/modes/ofb.js",
      "npm:browserify-aes@1.0.6/modes/cfb1.js",
      "npm:browserify-aes@1.0.6/modes/cfb8.js",
      "npm:browserify-aes@1.0.6/modes/cfb.js",
      "npm:browserify-aes@1.0.6/modes/cbc.js",
      "npm:browserify-aes@1.0.6/modes/ecb.js",
      "npm:evp_bytestokey@1.0.0.js",
      "npm:evp_bytestokey@1.0.0/index.js",
      "npm:browserify-aes@1.0.6/authCipher.js",
      "npm:browserify-aes@1.0.6/ghash.js",
      "npm:browserify-aes@1.0.6/aes.js",
      "npm:browserify-aes@1.0.6/streamCipher.js",
      "npm:browserify-aes@1.0.6/encrypter.js",
      "npm:parse-asn1@5.0.0/fixProc.js",
      "npm:parse-asn1@5.0.0/aesid.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:parse-asn1@5.0.0/asn1.js",
      "npm:asn1.js@4.6.2.js",
      "npm:asn1.js@4.6.2/lib/asn1.js",
      "npm:asn1.js@4.6.2/lib/asn1/encoders/index.js",
      "npm:asn1.js@4.6.2/lib/asn1/encoders/pem.js",
      "npm:asn1.js@4.6.2/lib/asn1/encoders/der.js",
      "npm:asn1.js@4.6.2/lib/asn1/decoders/index.js",
      "npm:asn1.js@4.6.2/lib/asn1/decoders/pem.js",
      "npm:asn1.js@4.6.2/lib/asn1/decoders/der.js",
      "npm:asn1.js@4.6.2/lib/asn1/constants/index.js",
      "npm:asn1.js@4.6.2/lib/asn1/constants/der.js",
      "npm:asn1.js@4.6.2/lib/asn1/base/index.js",
      "npm:asn1.js@4.6.2/lib/asn1/base/node.js",
      "npm:minimalistic-assert@1.0.0.js",
      "npm:minimalistic-assert@1.0.0/index.js",
      "npm:asn1.js@4.6.2/lib/asn1/base/buffer.js",
      "npm:asn1.js@4.6.2/lib/asn1/base/reporter.js",
      "npm:asn1.js@4.6.2/lib/asn1/api.js",
      "github:jspm/nodelibs-vm@0.1.0.js",
      "github:jspm/nodelibs-vm@0.1.0/index.js",
      "npm:vm-browserify@0.0.4.js",
      "npm:vm-browserify@0.0.4/index.js",
      "npm:indexof@0.0.1.js",
      "npm:indexof@0.0.1/index.js",
      "npm:public-encrypt@4.0.0/publicEncrypt.js",
      "npm:create-ecdh@4.0.0.js",
      "npm:create-ecdh@4.0.0/browser.js",
      "npm:browserify-sign@4.0.0.js",
      "npm:browserify-sign@4.0.0/browser.js",
      "npm:browserify-sign@4.0.0/verify.js",
      "npm:browserify-sign@4.0.0/curves.js",
      "npm:browserify-sign@4.0.0/sign.js",
      "npm:browserify-sign@4.0.0/algos.js",
      "npm:diffie-hellman@5.0.2.js",
      "npm:diffie-hellman@5.0.2/browser.js",
      "npm:diffie-hellman@5.0.2/lib/dh.js",
      "npm:diffie-hellman@5.0.2/lib/generatePrime.js",
      "npm:miller-rabin@4.0.0.js",
      "npm:miller-rabin@4.0.0/lib/mr.js",
      "npm:diffie-hellman@5.0.2/lib/primes.json!github:systemjs/plugin-json@0.1.2.js",
      "npm:browserify-cipher@1.0.0.js",
      "npm:browserify-cipher@1.0.0/browser.js",
      "npm:browserify-des@1.0.0/modes.js",
      "npm:browserify-des@1.0.0.js",
      "npm:browserify-des@1.0.0/index.js",
      "npm:des.js@1.0.0.js",
      "npm:des.js@1.0.0/lib/des.js",
      "npm:des.js@1.0.0/lib/des/ede.js",
      "npm:des.js@1.0.0/lib/des/cbc.js",
      "npm:des.js@1.0.0/lib/des/des.js",
      "npm:des.js@1.0.0/lib/des/cipher.js",
      "npm:des.js@1.0.0/lib/des/utils.js",
      "npm:zone.js@0.6.12.js",
      "npm:zone.js@0.6.12/dist/zone.js"
    ]
  },
  trace: false,

  map: {
    "@angular/common": "npm:@angular/common@2.0.0-rc.1",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
    "@angular/core": "npm:@angular/core@2.0.0-rc.1",
    "@angular/http": "npm:@angular/http@2.0.0-rc.1",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.1",
    "@angular/router": "npm:@angular/router@2.0.0-rc.1",
    "@angular/router-deprecated": "npm:@angular/router-deprecated@2.0.0-rc.1",
    "babel": "npm:babel-core@5.8.38",
    "babel-preset-angular2": "npm:babel-preset-angular2@0.0.2",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "boostrap": "npm:bootstrap@4.0.0-alpha.2",
    "bootstrap": "npm:bootstrap@4.0.0-alpha.2",
    "core-js": "npm:core-js@1.2.6",
    "crypto": "github:jspm/nodelibs-crypto@0.1.0",
    "css": "github:systemjs/plugin-css@0.1.22",
    "es6-shim": "github:es-shims/es6-shim@0.35.1",
    "ethereumjs-util": "npm:ethereumjs-util@4.4.1",
    "highlightjs": "github:components/highlightjs@9.4.0",
    "jquery": "npm:jquery@2.2.4",
    "reflect-metadata": "npm:reflect-metadata@0.1.3",
    "rxjs": "npm:rxjs@5.0.0-beta.8",
    "scss": "github:mobilexag/plugin-sass@0.4.4",
    "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "web3": "npm:web3@0.17.0-alpha",
    "zone.js": "npm:zone.js@0.6.12",
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "debug": "npm:debug@2.2.0",
      "socket.io-client": "github:socketio/socket.io-client@1.4.6",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:mobilexag/plugin-sass@0.4.4": {
      "autoprefixer": "npm:autoprefixer@6.3.6",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash": "npm:lodash@4.13.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@5.0.21",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.10",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:@angular/common@2.0.0-rc.1": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/compiler@2.0.0-rc.1": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/core@2.0.0-rc.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.0-beta.6",
      "zone.js": "npm:zone.js@0.6.12"
    },
    "npm:@angular/http@2.0.0-rc.1": {
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "rxjs": "npm:rxjs@5.0.0-beta.6"
    },
    "npm:@angular/platform-browser-dynamic@2.0.0-rc.1": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.1",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/platform-browser@2.0.0-rc.1": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.1",
      "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.1",
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/router-deprecated@2.0.0-rc.1": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.1",
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
    },
    "npm:@angular/router@2.0.0-rc.1": {
      "@angular/common": "npm:@angular/common@2.0.0-rc.1",
      "@angular/core": "npm:@angular/core@2.0.0-rc.1",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.1"
    },
    "npm:asn1.js@4.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:autoprefixer@6.3.6": {
      "browserslist": "npm:browserslist@1.3.2",
      "caniuse-db": "npm:caniuse-db@1.0.30000475",
      "normalize-range": "npm:normalize-range@0.1.2",
      "num2fraction": "npm:num2fraction@1.2.2",
      "postcss": "npm:postcss@5.0.21",
      "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:babel-code-frame@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@1.0.3"
    },
    "npm:babel-generator@6.9.0": {
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "babel-types": "npm:babel-types@6.9.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "detect-indent": "npm:detect-indent@3.0.1",
      "lodash": "npm:lodash@4.13.1",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:babel-messages@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-angular2-annotations@5.1.0": {
      "babel-generator": "npm:babel-generator@6.9.0",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4"
    },
    "npm:babel-plugin-syntax-class-properties@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.9.2"
    },
    "npm:babel-plugin-syntax-decorators@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.9.2"
    },
    "npm:babel-plugin-syntax-flow@6.8.0": {
      "babel-runtime": "npm:babel-runtime@6.9.2"
    },
    "npm:babel-plugin-transform-class-properties@6.9.1": {
      "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.9.2"
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "babel-template": "npm:babel-template@6.9.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-plugin-transform-flow-strip-types@6.8.0": {
      "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.9.2"
    },
    "npm:babel-preset-angular2@0.0.2": {
      "babel-plugin-angular2-annotations": "npm:babel-plugin-angular2-annotations@5.1.0",
      "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.9.1",
      "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
      "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.8.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.9.2": {
      "core-js": "npm:core-js@2.4.0",
      "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
    },
    "npm:babel-template@6.9.0": {
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "babel-traverse": "npm:babel-traverse@6.9.0",
      "babel-types": "npm:babel-types@6.9.1",
      "babylon": "npm:babylon@6.8.1",
      "lodash": "npm:lodash@4.13.1"
    },
    "npm:babel-traverse@6.9.0": {
      "babel-code-frame": "npm:babel-code-frame@6.8.0",
      "babel-messages": "npm:babel-messages@6.8.0",
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "babel-types": "npm:babel-types@6.9.1",
      "babylon": "npm:babylon@6.8.1",
      "debug": "npm:debug@2.2.0",
      "globals": "npm:globals@8.18.0",
      "invariant": "npm:invariant@2.2.1",
      "lodash": "npm:lodash@4.13.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.9.1": {
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "babel-traverse": "npm:babel-traverse@6.9.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.13.1",
      "to-fast-properties": "npm:to-fast-properties@1.0.2"
    },
    "npm:babylon@6.8.1": {
      "babel-runtime": "npm:babel-runtime@6.9.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bip66@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:bn.js@4.11.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:bootstrap@4.0.0-alpha.2": {
      "jquery": "npm:jquery@2.2.4",
      "tether": "github:HubSpot/tether@1.3.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sha3@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "js-sha3": "npm:js-sha3@0.3.1"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserslist@1.3.2": {
      "caniuse-db": "npm:caniuse-db@1.0.30000475",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.1"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:crypto-js@3.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:debug@2.2.0": {
      "ms": "npm:ms@0.7.1"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:detect-indent@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:drbg.js@1.0.1": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.3.1": {
      "bn.js": "npm:bn.js@4.11.4",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ethereumjs-util@4.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "keccakjs": "npm:keccakjs@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rlp": "npm:rlp@2.0.0",
      "secp256k1": "npm:secp256k1@3.1.0"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:globals@8.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.1": {
      "loose-envify": "npm:loose-envify@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:keccakjs@0.2.1": {
      "browserify-sha3": "npm:browserify-sha3@0.0.1",
      "sha3": "npm:sha3@1.2.0"
    },
    "npm:lodash@4.13.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:nan@2.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.6.2",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:postcss@5.0.21": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "supports-color": "npm:supports-color@3.1.2"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.4",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.9.5": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rlp@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:rxjs@5.0.0-beta.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.0-beta.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@0.2.4"
    },
    "npm:sass.js@0.9.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:secp256k1@3.1.0": {
      "bindings": "npm:bindings@1.2.1",
      "bip66": "npm:bip66@1.1.4",
      "bn.js": "npm:bn.js@4.11.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "drbg.js": "npm:drbg.js@1.0.1",
      "elliptic": "npm:elliptic@6.3.1",
      "nan": "npm:nan@2.3.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha3@1.2.0": {
      "nan": "npm:nan@2.3.5"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.1.2": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:web3@0.17.0-alpha": {
      "bignumber.js": "github:debris/bignumber.js@master",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "crypto-js": "npm:crypto-js@3.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "utf8": "npm:utf8@2.1.1"
    },
    "npm:zone.js@0.6.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
