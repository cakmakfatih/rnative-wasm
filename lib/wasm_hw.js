import { TextDecoder } from 'text-encoding';
import { Buffer } from 'buffer';

const __exports = {};
let wasm;

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

let WASM_VECTOR_LEN = 0;

let cachedTextDecoder = new TextDecoder('utf-8');

cachedTextDecoder.decode();

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

let cachegetNodeBufferMemory0 = null;
function getNodeBufferMemory0() {
    if (cachegetNodeBufferMemory0 === null || cachegetNodeBufferMemory0.buffer !== wasm.memory.buffer) {
        cachegetNodeBufferMemory0 = Buffer.from(wasm.memory.buffer);
    }
    return cachegetNodeBufferMemory0;
}

function passStringToWasm0(arg, malloc) {

    const len = Buffer.byteLength(arg);
    const ptr = malloc(len);
    getNodeBufferMemory0().write(arg, ptr, len);
    WASM_VECTOR_LEN = len;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

export function privateKeyFromSeed(seed) {
    var ptr0 = passArray8ToWasm0(seed, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.privateKeyFromSeed(8, ptr0, len0);
    var r0 = getInt32Memory0()[8 / 4 + 0];
    var r1 = getInt32Memory0()[8 / 4 + 1];
    var v1 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v1;
}

export function private_key_to_pubkey_hash(private_key) {
    var ptr0 = passArray8ToWasm0(private_key, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.private_key_to_pubkey_hash(8, ptr0, len0);
    var r0 = getInt32Memory0()[8 / 4 + 0];
    var r1 = getInt32Memory0()[8 / 4 + 1];
    var v1 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v1;
}

export function sign_musig(private_key, msg) {
    var ptr0 = passArray8ToWasm0(private_key, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passArray8ToWasm0(msg, wasm.__wbindgen_malloc);
    var len1 = WASM_VECTOR_LEN;
    wasm.sign_musig(8, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[8 / 4 + 0];
    var r1 = getInt32Memory0()[8 / 4 + 1];
    var v2 = getArrayU8FromWasm0(r0, r1).slice();
    wasm.__wbindgen_free(r0, r1 * 1);
    return v2;
}

function __wbg_new_59cb74e423758ede() {
    var ret = new Error();
    return addHeapObject(ret);
}

function __wbg_stack_558ba5917b466edd(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}

function __wbg_error_4bb6c2a97407129a(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
}

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
}

__exports.privateKeyFromSeed = privateKeyFromSeed;
__exports.private_key_to_pubkey_hash = private_key_to_pubkey_hash;
__exports.sign_musig = sign_musig;
__exports.__wbg_new_59cb74e423758ede = __wbg_new_59cb74e423758ede;
__exports.__wbg_stack_558ba5917b466edd = __wbg_stack_558ba5917b466edd;
__exports.__wbg_error_4bb6c2a97407129a = __wbg_error_4bb6c2a97407129a;
__exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;

async function get(url) {
    return new Promise((accept, reject) => {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = "arraybuffer";

        req.onload = function (event) {
            var resp = req.response;
            if (resp) {
                accept(resp);
            }
        };

        req.send(null);
    });
}

async function init(module) {
    let result;
    const imports = { "__wbindgen_placeholder__": __exports };

    if (
        module instanceof URL ||
        typeof module === "string" ||
        module instanceof Request
    ) {
        const response = get(module);
        
        if (typeof WebAssembly.instantiateStreaming === "function") {
            result = WebAssembly.instantiateStreaming(response, imports).catch(e => {
                return response
                    .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
                .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {
        result = WebAssembly.instantiate(module, imports).then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    
    return result.then(({ instance, module }) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

export default init;
