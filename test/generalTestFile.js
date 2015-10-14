
var $Γ = { 'global': { 'scope': null, 'Σ': 0 } };
var _$tmp;

$Γ['global'].$this = $Γ['global'];

$Λ = [{'l': 0, id: 'global'}];
$Δ = [];
function $pc() {
    return $Λ[$Λ.length - 1];
}
function $lub() {
    var args = Array.prototype.slice.call(arguments, 0);
    return args.sort(function (a, b) {
        return (b - a);
    })[0];
}

function $scope($$cs, $var, isLHS) {
    //console.log($$cs)
    var $$csCopy = $$cs;

    do {
        //if ($$cs.hasOwnProperty(""+$var))
        if ($$cs[$var] !== undefined)
            return $$cs;
    } while ($$cs = $$cs.scope);


    if (isLHS) {
        $Γ['global'][$var] = 0;
        return $Γ['global'];
    } else {

        // if we can't find $var in any scope and its name is 'global'
        // it must be the the global object. Return $Γ which contains
        // global object as a property.
        if ($var == 'global')
            return $Γ;

        throw new Error("Can't find variable " + $var + " in scope chain: " + JSON.stringify($$csCopy));
    }
}

function $prop(obj, prop, $$cs) {
    var $ro, $t;
    $ro = $t = $scope($$cs, obj, false)[obj];
    do {
        if ($ro[prop] !== undefined)
            return $ro[prop];
    } while ($ro = $ro['__$proto__']);

    // if we looked up a property that doesn't exist return
    // the objects sec level.
    return $t.Σ;
}

function $comp(lbl, lvl) {
    var i = $Λ.length;
    while (i > 1 && $Λ[i].id !== lbl) {
        i--;
        $Λ[i].l = ($Λ[i].l > lvl) ? $Λ[i].l : lvl;
    }
    i--;
    $Λ[i].l = ($Λ[i].l > lvl) ? $Λ[i].l : lvl;
}

function $upgrade(varArray, lvl, $$cs) {

}

function sec_lvl(obj, prop, getValue, $$cs) {

    var result;
    // special case of looking up 'this'
    if (obj === 'this') {
        obj = prop;
        prop = null;
    }
    if (prop !== null) {
        result = $prop(obj, "" + prop, $$cs);
    } else {
        result = $scope($$cs, obj, false)[obj];
    }
    if (getValue) {
        return (result instanceof Object) ? result.Σ : result;
    } else {
        return result;
    }
}
//-------------------------------------------------------------------------------

$Γ['global']['Packet'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    link: $Λ[$Λ.length - 1].l,
    id: $Λ[$Λ.length - 1].l,
    kind: $Λ[$Λ.length - 1].l
};
$Γ['global']['HandlerTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    scheduler: $Λ[$Λ.length - 1].l
};
$Γ['global']['WorkerTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    scheduler: $Λ[$Λ.length - 1].l,
    v1: $Λ[$Λ.length - 1].l,
    v2: $Λ[$Λ.length - 1].l
};
$Γ['global']['DeviceTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    scheduler: $Λ[$Λ.length - 1].l
};
$Γ['global']['IdleTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    scheduler: $Λ[$Λ.length - 1].l,
    v1: $Λ[$Λ.length - 1].l,
    count: $Λ[$Λ.length - 1].l
};
$Γ['global']['TaskControlBlock'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    link: $Λ[$Λ.length - 1].l,
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l,
    task: $Λ[$Λ.length - 1].l
};
$Γ['global']['Scheduler'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$Γ['global']['runRichards'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function runRichards() {
    var scheduler, $tmp8, queue, $tmp9, $tmp10, $tmp11, $tmp12, $tmp13, $tmp14, $tmp15, $tmp16, $tmp17, $tmp18, $tmp19;
    $Γ['global']['runRichards']['$tmp19'] = $Γ['global']['runRichards']['$tmp18'] = $Γ['global']['runRichards']['$tmp17'] = $Γ['global']['runRichards']['$tmp16'] = $Γ['global']['runRichards']['$tmp15'] = $Γ['global']['runRichards']['$tmp14'] = $Γ['global']['runRichards']['$tmp13'] = $Γ['global']['runRichards']['$tmp12'] = $Γ['global']['runRichards']['$tmp11'] = $Γ['global']['runRichards']['$tmp10'] = $Γ['global']['runRichards']['$tmp9'] = $Γ['global']['runRichards']['queue'] = $Γ['global']['runRichards']['$tmp8'] = $Γ['global']['runRichards']['scheduler'] = 0;
    $rf = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    scheduler = new Scheduler();
    $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'] = $Γ['global']['Scheduler']['$this'];
    $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'] instanceof Object ? $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'].Σ = $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'] = $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'scheduler', true)['scheduler'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'addIdleTask', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $rf['id'] = sec_lvl('ID_IDLE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_IDLE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = $Λ[$Λ.length - 1].l;
    $rf['queue'] = $Λ[$Λ.length - 1].l;
    $rf['count'] = sec_lvl('COUNT', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('COUNT', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    debugger;
    $tmp8 = scheduler.addIdleTask(ID_IDLE, 0, null, COUNT);
    $Γ['global']['runRichards']['$tmp8'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp8'] instanceof Object ? $Γ['global']['runRichards']['$tmp8'].Σ = $Γ['global']['runRichards']['$tmp8'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp8'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp8'] = $Γ['global']['runRichards']['$tmp8'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp8'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_WORKER', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_WORKER', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_WORK', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_WORK', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(null, ID_WORKER, KIND_WORK);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_WORKER', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_WORKER', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_WORK', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_WORK', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(queue, ID_WORKER, KIND_WORK);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'addWorkerTask', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $rf['id'] = sec_lvl('ID_WORKER', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_WORKER', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp9 = scheduler.addWorkerTask(ID_WORKER, 1000, queue);
    $Γ['global']['runRichards']['$tmp9'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp9'] instanceof Object ? $Γ['global']['runRichards']['$tmp9'].Σ = $Γ['global']['runRichards']['$tmp9'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp9'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp9'] = $Γ['global']['runRichards']['$tmp9'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp9'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(null, ID_DEVICE_A, KIND_DEVICE);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(queue, ID_DEVICE_A, KIND_DEVICE);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(queue, ID_DEVICE_A, KIND_DEVICE);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'addHandlerTask', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $rf['id'] = sec_lvl('ID_HANDLER_A', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_HANDLER_A', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp10 = scheduler.addHandlerTask(ID_HANDLER_A, 2000, queue);
    $Γ['global']['runRichards']['$tmp10'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp10'] instanceof Object ? $Γ['global']['runRichards']['$tmp10'].Σ = $Γ['global']['runRichards']['$tmp10'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp10'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp10'] = $Γ['global']['runRichards']['$tmp10'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp10'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(null, ID_DEVICE_B, KIND_DEVICE);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(queue, ID_DEVICE_B, KIND_DEVICE);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['runRichards'], 'Packet', false)['Packet'];
    $rf.scope = $Γ['global']['runRichards'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['kind'] = sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('KIND_DEVICE', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    queue = new Packet(queue, ID_DEVICE_B, KIND_DEVICE);
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $Λ.pop().l;
    $scope($Γ['global']['runRichards'], 'queue', true)['queue'] instanceof Object ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ = $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'queue', true)['queue'] = $scope($Γ['global']['runRichards'], 'queue', true)['queue'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'queue', true)['queue'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'addHandlerTask', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $rf['id'] = sec_lvl('ID_HANDLER_B', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_HANDLER_B', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp11 = scheduler.addHandlerTask(ID_HANDLER_B, 3000, queue);
    $Γ['global']['runRichards']['$tmp11'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp11'] instanceof Object ? $Γ['global']['runRichards']['$tmp11'].Σ = $Γ['global']['runRichards']['$tmp11'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp11'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp11'] = $Γ['global']['runRichards']['$tmp11'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp11'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'addDeviceTask', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $rf['id'] = sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_A', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = $Λ[$Λ.length - 1].l;
    $rf['queue'] = $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp12 = scheduler.addDeviceTask(ID_DEVICE_A, 4000, null);
    $Γ['global']['runRichards']['$tmp12'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp12'] instanceof Object ? $Γ['global']['runRichards']['$tmp12'].Σ = $Γ['global']['runRichards']['$tmp12'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp12'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp12'] = $Γ['global']['runRichards']['$tmp12'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp12'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'addDeviceTask', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $rf['id'] = sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_DEVICE_B', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = $Λ[$Λ.length - 1].l;
    $rf['queue'] = $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp13 = scheduler.addDeviceTask(ID_DEVICE_B, 5000, null);
    $Γ['global']['runRichards']['$tmp13'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp13'] instanceof Object ? $Γ['global']['runRichards']['$tmp13'].Σ = $Γ['global']['runRichards']['$tmp13'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp13'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp13'] = $Γ['global']['runRichards']['$tmp13'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp13'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('Scheduler', 'schedule', $Γ['global']['runRichards']);
    $rf.scope = $scope($Γ['global']['runRichards'], 'Scheduler', false)['Scheduler'];
    $rf.$this = $scope($Γ['global']['runRichards'], 'scheduler', false)['scheduler'];
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp14 = scheduler.schedule();
    $Γ['global']['runRichards']['$tmp14'] = $Λ.pop().l;
    $Γ['global']['runRichards']['$tmp14'] instanceof Object ? $Γ['global']['runRichards']['$tmp14'].Σ = $Γ['global']['runRichards']['$tmp14'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp14'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp14'] = $Γ['global']['runRichards']['$tmp14'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp14'] : $Λ[$Λ.length - 1].l;
    $tmp17 = scheduler.queueCount;
    $Γ['global']['runRichards']['$tmp17'] = sec_lvl('scheduler', 'queueCount', false, $Γ['global']['runRichards']);
    $Γ['global']['runRichards']['$tmp17'] instanceof Object ? $Γ['global']['runRichards']['$tmp17'].Σ = $Γ['global']['runRichards']['$tmp17'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp17'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp17'] = $Γ['global']['runRichards']['$tmp17'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp17'] : $Λ[$Λ.length - 1].l;
    $tmp16 = $tmp17 != EXPECTED_QUEUE_COUNT;
    $Γ['global']['runRichards']['$tmp16'] = sec_lvl('$tmp17', null, true, $Γ['global']['runRichards']) >= sec_lvl('EXPECTED_QUEUE_COUNT', null, true, $Γ['global']['runRichards']) ? sec_lvl('$tmp17', null, true, $Γ['global']['runRichards']) : sec_lvl('EXPECTED_QUEUE_COUNT', null, true, $Γ['global']['runRichards']);
    $Γ['global']['runRichards']['$tmp16'] instanceof Object ? $Γ['global']['runRichards']['$tmp16'].Σ = $Γ['global']['runRichards']['$tmp16'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp16'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp16'] = $Γ['global']['runRichards']['$tmp16'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp16'] : $Λ[$Λ.length - 1].l;
    $tmp19 = scheduler.holdCount;
    $Γ['global']['runRichards']['$tmp19'] = sec_lvl('scheduler', 'holdCount', false, $Γ['global']['runRichards']);
    $Γ['global']['runRichards']['$tmp19'] instanceof Object ? $Γ['global']['runRichards']['$tmp19'].Σ = $Γ['global']['runRichards']['$tmp19'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp19'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp19'] = $Γ['global']['runRichards']['$tmp19'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp19'] : $Λ[$Λ.length - 1].l;
    $tmp18 = $tmp19 != EXPECTED_HOLD_COUNT;
    $Γ['global']['runRichards']['$tmp18'] = sec_lvl('$tmp19', null, true, $Γ['global']['runRichards']) >= sec_lvl('EXPECTED_HOLD_COUNT', null, true, $Γ['global']['runRichards']) ? sec_lvl('$tmp19', null, true, $Γ['global']['runRichards']) : sec_lvl('EXPECTED_HOLD_COUNT', null, true, $Γ['global']['runRichards']);
    $Γ['global']['runRichards']['$tmp18'] instanceof Object ? $Γ['global']['runRichards']['$tmp18'].Σ = $Γ['global']['runRichards']['$tmp18'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp18'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp18'] = $Γ['global']['runRichards']['$tmp18'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp18'] : $Λ[$Λ.length - 1].l;
    $tmp15 = $tmp16 || $tmp18;
    $Γ['global']['runRichards']['$tmp15'] = sec_lvl('$tmp16', null, true, $Γ['global']['runRichards']) >= sec_lvl('$tmp18', null, true, $Γ['global']['runRichards']) ? sec_lvl('$tmp16', null, true, $Γ['global']['runRichards']) : sec_lvl('$tmp18', null, true, $Γ['global']['runRichards']);
    $Γ['global']['runRichards']['$tmp15'] instanceof Object ? $Γ['global']['runRichards']['$tmp15'].Σ = $Γ['global']['runRichards']['$tmp15'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp15'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp15'] = $Γ['global']['runRichards']['$tmp15'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp15'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp15', null, true, $Γ['global']['runRichards']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp15', null, true, $Γ['global']['runRichards']),
        id: 'IF'
    });
    if ($tmp15) {
        var msg, $tmp20, $tmp21, $tmp22, $tmp23, $tmp24, $tmp25;
        $Γ['global']['runRichards']['$tmp25'] = $Γ['global']['runRichards']['$tmp24'] = $Γ['global']['runRichards']['$tmp23'] = $Γ['global']['runRichards']['$tmp22'] = $Γ['global']['runRichards']['$tmp21'] = $Γ['global']['runRichards']['$tmp20'] = $Γ['global']['runRichards']['msg'] = 0;
        $tmp23 = scheduler.queueCount;
        $Γ['global']['runRichards']['$tmp23'] = sec_lvl('scheduler', 'queueCount', false, $Γ['global']['runRichards']);
        $Γ['global']['runRichards']['$tmp23'] instanceof Object ? $Γ['global']['runRichards']['$tmp23'].Σ = $Γ['global']['runRichards']['$tmp23'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp23'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp23'] = $Γ['global']['runRichards']['$tmp23'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp23'] : $Λ[$Λ.length - 1].l;
        $tmp22 = 'Error during execution: queueCount = ' + $tmp23;
        $Γ['global']['runRichards']['$tmp22'] = $Λ[$Λ.length - 1].l >= sec_lvl('$tmp23', null, true, $Γ['global']['runRichards']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp23', null, true, $Γ['global']['runRichards']);
        $Γ['global']['runRichards']['$tmp22'] instanceof Object ? $Γ['global']['runRichards']['$tmp22'].Σ = $Γ['global']['runRichards']['$tmp22'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp22'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp22'] = $Γ['global']['runRichards']['$tmp22'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp22'] : $Λ[$Λ.length - 1].l;
        $tmp21 = $tmp22 + ', holdCount = ';
        $Γ['global']['runRichards']['$tmp21'] = sec_lvl('$tmp22', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp22', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['runRichards']['$tmp21'] instanceof Object ? $Γ['global']['runRichards']['$tmp21'].Σ = $Γ['global']['runRichards']['$tmp21'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp21'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp21'] = $Γ['global']['runRichards']['$tmp21'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp21'] : $Λ[$Λ.length - 1].l;
        $tmp24 = scheduler.holdCount;
        $Γ['global']['runRichards']['$tmp24'] = sec_lvl('scheduler', 'holdCount', false, $Γ['global']['runRichards']);
        $Γ['global']['runRichards']['$tmp24'] instanceof Object ? $Γ['global']['runRichards']['$tmp24'].Σ = $Γ['global']['runRichards']['$tmp24'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp24'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp24'] = $Γ['global']['runRichards']['$tmp24'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp24'] : $Λ[$Λ.length - 1].l;
        $tmp20 = $tmp21 + $tmp24;
        $Γ['global']['runRichards']['$tmp20'] = sec_lvl('$tmp21', null, true, $Γ['global']['runRichards']) >= sec_lvl('$tmp24', null, true, $Γ['global']['runRichards']) ? sec_lvl('$tmp21', null, true, $Γ['global']['runRichards']) : sec_lvl('$tmp24', null, true, $Γ['global']['runRichards']);
        $Γ['global']['runRichards']['$tmp20'] instanceof Object ? $Γ['global']['runRichards']['$tmp20'].Σ = $Γ['global']['runRichards']['$tmp20'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp20'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['runRichards']['$tmp20'] = $Γ['global']['runRichards']['$tmp20'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['runRichards']['$tmp20'] : $Λ[$Λ.length - 1].l;
        msg = $tmp20 + '.';
        $scope($Γ['global']['runRichards'], 'msg', true)['msg'] = sec_lvl('$tmp20', null, true, $Γ['global']['runRichards']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp20', null, true, $Γ['global']['runRichards']) : $Λ[$Λ.length - 1].l;
        $scope($Γ['global']['runRichards'], 'msg', true)['msg'] instanceof Object ? $scope($Γ['global']['runRichards'], 'msg', true)['msg'].Σ = $scope($Γ['global']['runRichards'], 'msg', true)['msg'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'msg', true)['msg'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['runRichards'], 'msg', true)['msg'] = $scope($Γ['global']['runRichards'], 'msg', true)['msg'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['runRichards'], 'msg', true)['msg'] : $Λ[$Λ.length - 1].l;
        $tmp25 = new Error(msg);
        $old_pc = $pc();
        while ($pc().id !== 'FUNC' && $pc().id !== 'TRY') {
            $Λ.pop();
        }
        $Λ[$Λ.length - 1] = { 'l': $lub($old_pc.l, sec_lvl('$tmp25', null, true, $Γ['global']['runRichards'])) };
        throw $tmp25;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade(['$tmp25'], $Λ[$Λ.length - 1].l, $Γ['global']['runRichards']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    return;
}
var COUNT, EXPECTED_QUEUE_COUNT, EXPECTED_HOLD_COUNT, ID_IDLE, ID_WORKER, ID_HANDLER_A, ID_HANDLER_B, ID_DEVICE_A, ID_DEVICE_B, NUMBER_OF_IDS, KIND_DEVICE, KIND_WORK, $tmp0, STATE_RUNNING, STATE_RUNNABLE, STATE_SUSPENDED, STATE_HELD, STATE_SUSPENDED_RUNNABLE, STATE_NOT_HELD, $tmp1, $tmp2, $tmp3, $tmp4, $tmp5, DATA_SIZE, $tmp6, $tmp7;
$Γ['global']['$tmp7'] = $Γ['global']['$tmp6'] = $Γ['global']['DATA_SIZE'] = $Γ['global']['$tmp5'] = $Γ['global']['$tmp4'] = $Γ['global']['$tmp3'] = $Γ['global']['$tmp2'] = $Γ['global']['$tmp1'] = $Γ['global']['STATE_NOT_HELD'] = $Γ['global']['STATE_SUSPENDED_RUNNABLE'] = $Γ['global']['STATE_HELD'] = $Γ['global']['STATE_SUSPENDED'] = $Γ['global']['STATE_RUNNABLE'] = $Γ['global']['STATE_RUNNING'] = $Γ['global']['$tmp0'] = $Γ['global']['KIND_WORK'] = $Γ['global']['KIND_DEVICE'] = $Γ['global']['NUMBER_OF_IDS'] = $Γ['global']['ID_DEVICE_B'] = $Γ['global']['ID_DEVICE_A'] = $Γ['global']['ID_HANDLER_B'] = $Γ['global']['ID_HANDLER_A'] = $Γ['global']['ID_WORKER'] = $Γ['global']['ID_IDLE'] = $Γ['global']['EXPECTED_HOLD_COUNT'] = $Γ['global']['EXPECTED_QUEUE_COUNT'] = $Γ['global']['COUNT'] = 0;
COUNT = 1000;
$Γ['global']['COUNT'] = $Λ[$Λ.length - 1].l;
EXPECTED_QUEUE_COUNT = 2322;
$Γ['global']['EXPECTED_QUEUE_COUNT'] = $Λ[$Λ.length - 1].l;
EXPECTED_HOLD_COUNT = 928;
$Γ['global']['EXPECTED_HOLD_COUNT'] = $Λ[$Λ.length - 1].l;
function Scheduler() {
    this.queueCount = 0;
    $Γ['global']['Scheduler']['$this']['queueCount'] = $Λ[$Λ.length - 1].l;
    this.holdCount = 0;
    $Γ['global']['Scheduler']['$this']['holdCount'] = $Λ[$Λ.length - 1].l;
    this.blocks = new Array(NUMBER_OF_IDS);
    this.list = null;
    $Γ['global']['Scheduler']['$this']['list'] = $Λ[$Λ.length - 1].l;
    this.currentTcb = null;
    $Γ['global']['Scheduler']['$this']['currentTcb'] = $Λ[$Λ.length - 1].l;
    this.currentId = null;
    $Γ['global']['Scheduler']['$this']['currentId'] = $Λ[$Λ.length - 1].l;
    return;
}
ID_IDLE = 0;
$Γ['global']['ID_IDLE'] = $Λ[$Λ.length - 1].l;
ID_WORKER = 1;
$Γ['global']['ID_WORKER'] = $Λ[$Λ.length - 1].l;
ID_HANDLER_A = 2;
$Γ['global']['ID_HANDLER_A'] = $Λ[$Λ.length - 1].l;
ID_HANDLER_B = 3;
$Γ['global']['ID_HANDLER_B'] = $Λ[$Λ.length - 1].l;
ID_DEVICE_A = 4;
$Γ['global']['ID_DEVICE_A'] = $Λ[$Λ.length - 1].l;
ID_DEVICE_B = 5;
$Γ['global']['ID_DEVICE_B'] = $Λ[$Λ.length - 1].l;
NUMBER_OF_IDS = 6;
$Γ['global']['NUMBER_OF_IDS'] = $Λ[$Λ.length - 1].l;
KIND_DEVICE = 0;
$Γ['global']['KIND_DEVICE'] = $Λ[$Λ.length - 1].l;
KIND_WORK = 1;
$Γ['global']['KIND_WORK'] = $Λ[$Λ.length - 1].l;
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.addIdleTask = function (id, priority, queue, count) {
    var $tmp26, $tmp27, $tmp28;
    $Γ['global']['$tmp0']['addIdleTask']['$tmp28'] = $Γ['global']['$tmp0']['addIdleTask']['$tmp27'] = $Γ['global']['$tmp0']['addIdleTask']['$tmp26'] = 0;
    $tmp28 = this;
    $Γ['global']['$tmp0']['addIdleTask']['$tmp28'] = $Γ['global']['$tmp0']['addIdleTask'].$this;
    $Γ['global']['$tmp0']['addIdleTask']['$tmp28'] instanceof Object ? $Γ['global']['$tmp0']['addIdleTask']['$tmp28'].Σ = $Γ['global']['$tmp0']['addIdleTask']['$tmp28'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addIdleTask']['$tmp28'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addIdleTask']['$tmp28'] = $Γ['global']['$tmp0']['addIdleTask']['$tmp28'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addIdleTask']['$tmp28'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['$tmp0']['addIdleTask'], 'IdleTask', false)['IdleTask'];
    $rf.scope = $Γ['global']['$tmp0']['addIdleTask'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['scheduler'] = sec_lvl('$tmp28', null, true, $Γ['global']['$tmp0']['addIdleTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp28', null, true, $Γ['global']['$tmp0']['addIdleTask']) : $Λ[$Λ.length - 1].l;
    $rf['v1'] = $Λ[$Λ.length - 1].l;
    $rf['count'] = sec_lvl('count', null, true, $Γ['global']['$tmp0']['addIdleTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('count', null, true, $Γ['global']['$tmp0']['addIdleTask']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp27 = new IdleTask($tmp28, 1, count);
    $Γ['global']['$tmp0']['addIdleTask']['$tmp27'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addIdleTask']['$tmp27'] instanceof Object ? $Γ['global']['$tmp0']['addIdleTask']['$tmp27'].Σ = $Γ['global']['$tmp0']['addIdleTask']['$tmp27'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addIdleTask']['$tmp27'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addIdleTask']['$tmp27'] = $Γ['global']['$tmp0']['addIdleTask']['$tmp27'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addIdleTask']['$tmp27'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('$tmp0', 'addRunningTask', $Γ['global']['$tmp0']['addIdleTask']);
    $rf.scope = $Γ['global']['$tmp0']['addIdleTask'];
    $rf.$this = $Γ['global']['$tmp0']['addIdleTask']['$this'];
    $rf['id'] = sec_lvl('id', null, true, $Γ['global']['$tmp0']['addIdleTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('id', null, true, $Γ['global']['$tmp0']['addIdleTask']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addIdleTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addIdleTask']) : $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addIdleTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addIdleTask']) : $Λ[$Λ.length - 1].l;
    $rf['task'] = sec_lvl('$tmp27', null, true, $Γ['global']['$tmp0']['addIdleTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp27', null, true, $Γ['global']['$tmp0']['addIdleTask']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp26 = this.addRunningTask(id, priority, queue, $tmp27);
    $Γ['global']['$tmp0']['addIdleTask']['$tmp26'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addIdleTask']['$tmp26'] instanceof Object ? $Γ['global']['$tmp0']['addIdleTask']['$tmp26'].Σ = $Γ['global']['$tmp0']['addIdleTask']['$tmp26'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addIdleTask']['$tmp26'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addIdleTask']['$tmp26'] = $Γ['global']['$tmp0']['addIdleTask']['$tmp26'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addIdleTask']['$tmp26'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp0']['addIdleTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l,
    count: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.addWorkerTask = function (id, priority, queue) {
    var $tmp29, $tmp30, $tmp31;
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'] = $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'] = $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'] = 0;
    $tmp31 = this;
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'] = $Γ['global']['$tmp0']['addWorkerTask'].$this;
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'] instanceof Object ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'].Σ = $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'] = $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp31'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['$tmp0']['addWorkerTask'], 'WorkerTask', false)['WorkerTask'];
    $rf.scope = $Γ['global']['$tmp0']['addWorkerTask'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['scheduler'] = sec_lvl('$tmp31', null, true, $Γ['global']['$tmp0']['addWorkerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp31', null, true, $Γ['global']['$tmp0']['addWorkerTask']) : $Λ[$Λ.length - 1].l;
    $rf['v1'] = sec_lvl('ID_HANDLER_A', null, true, $Γ['global']['$tmp0']['addWorkerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('ID_HANDLER_A', null, true, $Γ['global']['$tmp0']['addWorkerTask']) : $Λ[$Λ.length - 1].l;
    $rf['v2'] = $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp30 = new WorkerTask($tmp31, ID_HANDLER_A, 0);
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'] instanceof Object ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'].Σ = $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'] = $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp30'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('$tmp0', 'addTask', $Γ['global']['$tmp0']['addWorkerTask']);
    $rf.scope = $Γ['global']['$tmp0']['addWorkerTask'];
    $rf.$this = $Γ['global']['$tmp0']['addWorkerTask']['$this'];
    $rf['id'] = sec_lvl('id', null, true, $Γ['global']['$tmp0']['addWorkerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('id', null, true, $Γ['global']['$tmp0']['addWorkerTask']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addWorkerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addWorkerTask']) : $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addWorkerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addWorkerTask']) : $Λ[$Λ.length - 1].l;
    $rf['task'] = sec_lvl('$tmp30', null, true, $Γ['global']['$tmp0']['addWorkerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp30', null, true, $Γ['global']['$tmp0']['addWorkerTask']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp29 = this.addTask(id, priority, queue, $tmp30);
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'] instanceof Object ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'].Σ = $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'] = $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addWorkerTask']['$tmp29'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp0']['addWorkerTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.addHandlerTask = function (id, priority, queue) {
    var $tmp32, $tmp33, $tmp34;
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'] = $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'] = $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'] = 0;
    $tmp34 = this;
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'] = $Γ['global']['$tmp0']['addHandlerTask'].$this;
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'] instanceof Object ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'].Σ = $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'] = $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp34'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['$tmp0']['addHandlerTask'], 'HandlerTask', false)['HandlerTask'];
    $rf.scope = $Γ['global']['$tmp0']['addHandlerTask'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['scheduler'] = sec_lvl('$tmp34', null, true, $Γ['global']['$tmp0']['addHandlerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp34', null, true, $Γ['global']['$tmp0']['addHandlerTask']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp33 = new HandlerTask($tmp34);
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'] instanceof Object ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'].Σ = $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'] = $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp33'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('$tmp0', 'addTask', $Γ['global']['$tmp0']['addHandlerTask']);
    $rf.scope = $Γ['global']['$tmp0']['addHandlerTask'];
    $rf.$this = $Γ['global']['$tmp0']['addHandlerTask']['$this'];
    $rf['id'] = sec_lvl('id', null, true, $Γ['global']['$tmp0']['addHandlerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('id', null, true, $Γ['global']['$tmp0']['addHandlerTask']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addHandlerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addHandlerTask']) : $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addHandlerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addHandlerTask']) : $Λ[$Λ.length - 1].l;
    $rf['task'] = sec_lvl('$tmp33', null, true, $Γ['global']['$tmp0']['addHandlerTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp33', null, true, $Γ['global']['$tmp0']['addHandlerTask']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp32 = this.addTask(id, priority, queue, $tmp33);
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'] instanceof Object ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'].Σ = $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'] = $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addHandlerTask']['$tmp32'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp0']['addHandlerTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.addDeviceTask = function (id, priority, queue) {
    var $tmp35, $tmp36, $tmp37;
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'] = $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'] = $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'] = 0;
    $tmp37 = this;
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'] = $Γ['global']['$tmp0']['addDeviceTask'].$this;
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'] instanceof Object ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'].Σ = $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'] = $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp37'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['$tmp0']['addDeviceTask'], 'DeviceTask', false)['DeviceTask'];
    $rf.scope = $Γ['global']['$tmp0']['addDeviceTask'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['scheduler'] = sec_lvl('$tmp37', null, true, $Γ['global']['$tmp0']['addDeviceTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp37', null, true, $Γ['global']['$tmp0']['addDeviceTask']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp36 = new DeviceTask($tmp37);
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'] instanceof Object ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'].Σ = $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'] = $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp36'] : $Λ[$Λ.length - 1].l;
    $rf = $prop('$tmp0', 'addTask', $Γ['global']['$tmp0']['addDeviceTask']);
    $rf.scope = $Γ['global']['$tmp0']['addDeviceTask'];
    $rf.$this = $Γ['global']['$tmp0']['addDeviceTask']['$this'];
    $rf['id'] = sec_lvl('id', null, true, $Γ['global']['$tmp0']['addDeviceTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('id', null, true, $Γ['global']['$tmp0']['addDeviceTask']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addDeviceTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addDeviceTask']) : $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addDeviceTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addDeviceTask']) : $Λ[$Λ.length - 1].l;
    $rf['task'] = sec_lvl('$tmp36', null, true, $Γ['global']['$tmp0']['addDeviceTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp36', null, true, $Γ['global']['$tmp0']['addDeviceTask']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp35 = this.addTask(id, priority, queue, $tmp36);
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'] instanceof Object ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'].Σ = $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'] = $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addDeviceTask']['$tmp35'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp0']['addDeviceTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.addRunningTask = function (id, priority, queue, task) {
    var $tmp38, $tmp39, $tmp40;
    $Γ['global']['$tmp0']['addRunningTask']['$tmp40'] = $Γ['global']['$tmp0']['addRunningTask']['$tmp39'] = $Γ['global']['$tmp0']['addRunningTask']['$tmp38'] = 0;
    $rf = $prop('$tmp0', 'addTask', $Γ['global']['$tmp0']['addRunningTask']);
    $rf.scope = $Γ['global']['$tmp0']['addRunningTask'];
    $rf.$this = $Γ['global']['$tmp0']['addRunningTask']['$this'];
    $rf['id'] = sec_lvl('id', null, true, $Γ['global']['$tmp0']['addRunningTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('id', null, true, $Γ['global']['$tmp0']['addRunningTask']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addRunningTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addRunningTask']) : $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addRunningTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addRunningTask']) : $Λ[$Λ.length - 1].l;
    $rf['task'] = sec_lvl('task', null, true, $Γ['global']['$tmp0']['addRunningTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('task', null, true, $Γ['global']['$tmp0']['addRunningTask']) : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    $tmp38 = this.addTask(id, priority, queue, task);
    $Γ['global']['$tmp0']['addRunningTask']['$tmp38'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addRunningTask']['$tmp38'] instanceof Object ? $Γ['global']['$tmp0']['addRunningTask']['$tmp38'].Σ = $Γ['global']['$tmp0']['addRunningTask']['$tmp38'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addRunningTask']['$tmp38'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addRunningTask']['$tmp38'] = $Γ['global']['$tmp0']['addRunningTask']['$tmp38'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addRunningTask']['$tmp38'] : $Λ[$Λ.length - 1].l;
    $tmp40 = this.currentTcb;
    $Γ['global']['$tmp0']['addRunningTask']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['addRunningTask']);
    $Γ['global']['$tmp0']['addRunningTask']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['addRunningTask']['$tmp40'].Σ = $Γ['global']['$tmp0']['addRunningTask']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addRunningTask']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addRunningTask']['$tmp40'] = $Γ['global']['$tmp0']['addRunningTask']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addRunningTask']['$tmp40'] : $Λ[$Λ.length - 1].l;
    $tmp39 = $tmp40.setRunning();
    return;
};
$Γ['global']['$tmp0']['addRunningTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l,
    task: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.addTask = function (id, priority, queue, task) {
    var $tmp41, $tmp42;
    $Γ['global']['$tmp0']['addTask']['$tmp42'] = $Γ['global']['$tmp0']['addTask']['$tmp41'] = 0;
    $tmp41 = this.list;
    $Γ['global']['$tmp0']['addTask']['$tmp41'] = sec_lvl('$tmp0', 'list', false, $Γ['global']['$tmp0']['addTask']);
    $Γ['global']['$tmp0']['addTask']['$tmp41'] instanceof Object ? $Γ['global']['$tmp0']['addTask']['$tmp41'].Σ = $Γ['global']['$tmp0']['addTask']['$tmp41'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$tmp41'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addTask']['$tmp41'] = $Γ['global']['$tmp0']['addTask']['$tmp41'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$tmp41'] : $Λ[$Λ.length - 1].l;
    $rf = $scope($Γ['global']['$tmp0']['addTask'], 'TaskControlBlock', false)['TaskControlBlock'];
    $rf.scope = $Γ['global']['$tmp0']['addTask'];
    $rf.$this = {
        Σ: $Λ[$Λ.length - 1].l,
        __$proto__: $rf.prototype
    };
    $rf['link'] = sec_lvl('$tmp41', null, true, $Γ['global']['$tmp0']['addTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp41', null, true, $Γ['global']['$tmp0']['addTask']) : $Λ[$Λ.length - 1].l;
    $rf['id'] = sec_lvl('id', null, true, $Γ['global']['$tmp0']['addTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('id', null, true, $Γ['global']['$tmp0']['addTask']) : $Λ[$Λ.length - 1].l;
    $rf['priority'] = sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('priority', null, true, $Γ['global']['$tmp0']['addTask']) : $Λ[$Λ.length - 1].l;
    $rf['queue'] = sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp0']['addTask']) : $Λ[$Λ.length - 1].l;
    $rf['task'] = sec_lvl('task', null, true, $Γ['global']['$tmp0']['addTask']) >= $Λ[$Λ.length - 1].l ? sec_lvl('task', null, true, $Γ['global']['$tmp0']['addTask']) : $Λ[$Λ.length - 1].l;
    $rf.InvokedAsContr = true;
    $Λ.push({
        l: $rf.$fscope,
        id: 'FUNC'
    });
    this.currentTcb = new TaskControlBlock($tmp41, id, priority, queue, task);
    $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'] = $Λ.pop().l;
    $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'] instanceof Object ? $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'].Σ = $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'] = $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$this']['currentTcb'] : $Λ[$Λ.length - 1].l;
    this.list = this.currentTcb;
    $Γ['global']['$tmp0']['addTask']['$this']['list'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['addTask']);
    $Γ['global']['$tmp0']['addTask']['$this']['list'] instanceof Object ? $Γ['global']['$tmp0']['addTask']['$this']['list'].Σ = $Γ['global']['$tmp0']['addTask']['$this']['list'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$this']['list'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addTask']['$this']['list'] = $Γ['global']['$tmp0']['addTask']['$this']['list'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$this']['list'] : $Λ[$Λ.length - 1].l;
    $tmp42 = this.blocks;
    $Γ['global']['$tmp0']['addTask']['$tmp42'] = sec_lvl('$tmp0', 'blocks', false, $Γ['global']['$tmp0']['addTask']);
    $Γ['global']['$tmp0']['addTask']['$tmp42'] instanceof Object ? $Γ['global']['$tmp0']['addTask']['$tmp42'].Σ = $Γ['global']['$tmp0']['addTask']['$tmp42'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$tmp42'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['addTask']['$tmp42'] = $Γ['global']['$tmp0']['addTask']['$tmp42'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['addTask']['$tmp42'] : $Λ[$Λ.length - 1].l;
    $tmp42[id] = this.currentTcb;
    $Γ['global']['$tmp0']['addTask']['$tmp42']['id'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['addTask']);
    _$tmp = sec_lvl('id', null, false, $Γ['global']['$tmp0']['addTask']) instanceof Object ? sec_lvl('id', null, false, $Γ['global']['$tmp0']['addTask']).Σ : sec_lvl('id', null, false, $Γ['global']['$tmp0']['addTask']);
    $Γ['global']['$tmp0']['addTask']['$tmp42']['id'] instanceof Object ? $Γ['global']['$tmp0']['addTask']['$tmp42']['id'].Σ = $Γ['global']['$tmp0']['addTask']['$tmp42']['id'].Σ : $Γ['global']['$tmp0']['addTask']['$tmp42']['id'] = $Γ['global']['$tmp0']['addTask']['$tmp42']['id'];
    return;
};
$Γ['global']['$tmp0']['addTask'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l,
    priority: $Λ[$Λ.length - 1].l,
    queue: $Λ[$Λ.length - 1].l,
    task: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.schedule = function () {
    this.currentTcb = this.list;
    $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] = sec_lvl('$tmp0', 'list', false, $Γ['global']['$tmp0']['schedule']);
    $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'].Σ = $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] = $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] : $Λ[$Λ.length - 1].l;
    var $tmp43, $tmp44;
    $Γ['global']['$tmp0']['schedule']['$tmp44'] = $Γ['global']['$tmp0']['schedule']['$tmp43'] = 0;
    $tmp44 = this.currentTcb;
    $Γ['global']['$tmp0']['schedule']['$tmp44'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['schedule']);
    $Γ['global']['$tmp0']['schedule']['$tmp44'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp44'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp44'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp44'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp44'] = $Γ['global']['$tmp0']['schedule']['$tmp44'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp44'] : $Λ[$Λ.length - 1].l;
    $tmp43 = $tmp44 != null;
    $Γ['global']['$tmp0']['schedule']['$tmp43'] = sec_lvl('$tmp44', null, true, $Γ['global']['$tmp0']['schedule']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp44', null, true, $Γ['global']['$tmp0']['schedule']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp0']['schedule']['$tmp43'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp43'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp43'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp43'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp43'] = $Γ['global']['$tmp0']['schedule']['$tmp43'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp43'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp43', null, true, $Γ['global']['$tmp0']['schedule']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp43', null, true, $Γ['global']['$tmp0']['schedule']),
        id: 'LOOP'
    });
    while ($tmp43) {
        var $tmp45, $tmp40, $tmp43, $tmp46;
        $Γ['global']['$tmp0']['schedule']['$tmp46'] = $Γ['global']['$tmp0']['schedule']['$tmp43'] = $Γ['global']['$tmp0']['schedule']['$tmp40'] = $Γ['global']['$tmp0']['schedule']['$tmp45'] = 0;
        $tmp40 = this.currentTcb;
        $Γ['global']['$tmp0']['schedule']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['schedule']);
        $Γ['global']['$tmp0']['schedule']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp40'] = $Γ['global']['$tmp0']['schedule']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'] : $Λ[$Λ.length - 1].l;
        $tmp45 = $tmp40.isHeldOrSuspended();
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp45', null, true, $Γ['global']['$tmp0']['schedule']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp45', null, true, $Γ['global']['$tmp0']['schedule']),
            id: 'IF'
        });
        if ($tmp45) {
            $upgrade(['this'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['schedule']);
            var $tmp40;
            $Γ['global']['$tmp0']['schedule']['$tmp40'] = 0;
            $tmp40 = this.currentTcb;
            $Γ['global']['$tmp0']['schedule']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['schedule']);
            $Γ['global']['$tmp0']['schedule']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp40'] = $Γ['global']['$tmp0']['schedule']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'] : $Λ[$Λ.length - 1].l;
            this.currentTcb = $tmp40.link;
            $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] = sec_lvl('$tmp40', 'link', false, $Γ['global']['$tmp0']['schedule']);
            $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'].Σ = $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] = $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$this']['currentTcb'] : $Λ[$Λ.length - 1].l;
        } else {
            var $tmp40;
            $Γ['global']['$tmp0']['schedule']['$tmp40'] = 0;
            $tmp40 = this.currentTcb;
            $Γ['global']['$tmp0']['schedule']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['schedule']);
            $Γ['global']['$tmp0']['schedule']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp40'] = $Γ['global']['$tmp0']['schedule']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'] : $Λ[$Λ.length - 1].l;
            this.currentId = $tmp40.id;
            $Γ['global']['$tmp0']['schedule']['$this']['currentId'] = sec_lvl('$tmp40', 'id', false, $Γ['global']['$tmp0']['schedule']);
            $Γ['global']['$tmp0']['schedule']['$this']['currentId'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$this']['currentId'].Σ = $Γ['global']['$tmp0']['schedule']['$this']['currentId'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$this']['currentId'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$this']['currentId'] = $Γ['global']['$tmp0']['schedule']['$this']['currentId'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$this']['currentId'] : $Λ[$Λ.length - 1].l;
            $tmp40 = this.currentTcb;
            $Γ['global']['$tmp0']['schedule']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['schedule']);
            $Γ['global']['$tmp0']['schedule']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp40'] = $Γ['global']['$tmp0']['schedule']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp40'] : $Λ[$Λ.length - 1].l;
            this.currentTcb = $tmp40.run();
        }
        $Λ.pop();
        $tmp46 = this.currentTcb;
        $Γ['global']['$tmp0']['schedule']['$tmp46'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['schedule']);
        $Γ['global']['$tmp0']['schedule']['$tmp46'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp46'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp46'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp46'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp46'] = $Γ['global']['$tmp0']['schedule']['$tmp46'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp46'] : $Λ[$Λ.length - 1].l;
        $tmp43 = $tmp46 != null;
        $Γ['global']['$tmp0']['schedule']['$tmp43'] = sec_lvl('$tmp46', null, true, $Γ['global']['$tmp0']['schedule']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp46', null, true, $Γ['global']['$tmp0']['schedule']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp0']['schedule']['$tmp43'] instanceof Object ? $Γ['global']['$tmp0']['schedule']['$tmp43'].Σ = $Γ['global']['$tmp0']['schedule']['$tmp43'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp43'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['schedule']['$tmp43'] = $Γ['global']['$tmp0']['schedule']['$tmp43'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['schedule']['$tmp43'] : $Λ[$Λ.length - 1].l;
    }
    $upgrade([
        '$tmp45',
        'this'
    ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp0']['schedule']);
    $Λ.pop();
    return;
};
$Γ['global']['$tmp0']['schedule'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.release = function (id) {
    var tcb, $tmp42, $tmp47, $tmp48, $tmp49, $tmp50, $tmp51, $tmp40;
    $Γ['global']['$tmp0']['release']['$tmp40'] = $Γ['global']['$tmp0']['release']['$tmp51'] = $Γ['global']['$tmp0']['release']['$tmp50'] = $Γ['global']['$tmp0']['release']['$tmp49'] = $Γ['global']['$tmp0']['release']['$tmp48'] = $Γ['global']['$tmp0']['release']['$tmp47'] = $Γ['global']['$tmp0']['release']['$tmp42'] = $Γ['global']['$tmp0']['release']['tcb'] = 0;
    $tmp42 = this.blocks;
    $Γ['global']['$tmp0']['release']['$tmp42'] = sec_lvl('$tmp0', 'blocks', false, $Γ['global']['$tmp0']['release']);
    $Γ['global']['$tmp0']['release']['$tmp42'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp42'].Σ = $Γ['global']['$tmp0']['release']['$tmp42'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp42'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp42'] = $Γ['global']['$tmp0']['release']['$tmp42'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp42'] : $Λ[$Λ.length - 1].l;
    tcb = $tmp42[id];
    $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'] = sec_lvl('$tmp42', id, false, $Γ['global']['$tmp0']['release']);
    $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'] instanceof Object ? $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'].Σ = $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'] = $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp0']['release'], 'tcb', true)['tcb'] : $Λ[$Λ.length - 1].l;
    $tmp47 = tcb == null;
    $Γ['global']['$tmp0']['release']['$tmp47'] = sec_lvl('tcb', null, true, $Γ['global']['$tmp0']['release']) >= $Λ[$Λ.length - 1].l ? sec_lvl('tcb', null, true, $Γ['global']['$tmp0']['release']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp0']['release']['$tmp47'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp47'].Σ = $Γ['global']['$tmp0']['release']['$tmp47'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp47'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp47'] = $Γ['global']['$tmp0']['release']['$tmp47'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp47'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp47', null, true, $Γ['global']['$tmp0']['release']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp47', null, true, $Γ['global']['$tmp0']['release']),
        id: 'IF'
    });
    if ($tmp47) {
        return tcb;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp48 = tcb.markAsNotHeld();
    $tmp50 = tcb.priority;
    $Γ['global']['$tmp0']['release']['$tmp50'] = sec_lvl('tcb', 'priority', false, $Γ['global']['$tmp0']['release']);
    $Γ['global']['$tmp0']['release']['$tmp50'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp50'].Σ = $Γ['global']['$tmp0']['release']['$tmp50'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp50'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp50'] = $Γ['global']['$tmp0']['release']['$tmp50'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp50'] : $Λ[$Λ.length - 1].l;
    $tmp40 = this.currentTcb;
    $Γ['global']['$tmp0']['release']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['release']);
    $Γ['global']['$tmp0']['release']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp40'].Σ = $Γ['global']['$tmp0']['release']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp40'] = $Γ['global']['$tmp0']['release']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp40'] : $Λ[$Λ.length - 1].l;
    $tmp51 = $tmp40.priority;
    $Γ['global']['$tmp0']['release']['$tmp51'] = sec_lvl('$tmp40', 'priority', false, $Γ['global']['$tmp0']['release']);
    $Γ['global']['$tmp0']['release']['$tmp51'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp51'].Σ = $Γ['global']['$tmp0']['release']['$tmp51'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp51'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp51'] = $Γ['global']['$tmp0']['release']['$tmp51'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp51'] : $Λ[$Λ.length - 1].l;
    $tmp49 = $tmp50 > $tmp51;
    $Γ['global']['$tmp0']['release']['$tmp49'] = sec_lvl('$tmp50', null, true, $Γ['global']['$tmp0']['release']) >= sec_lvl('$tmp51', null, true, $Γ['global']['$tmp0']['release']) ? sec_lvl('$tmp50', null, true, $Γ['global']['$tmp0']['release']) : sec_lvl('$tmp51', null, true, $Γ['global']['$tmp0']['release']);
    $Γ['global']['$tmp0']['release']['$tmp49'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp49'].Σ = $Γ['global']['$tmp0']['release']['$tmp49'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp49'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp49'] = $Γ['global']['$tmp0']['release']['$tmp49'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp49'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp49', null, true, $Γ['global']['$tmp0']['release']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp49', null, true, $Γ['global']['$tmp0']['release']),
        id: 'IF'
    });
    if ($tmp49) {
        return tcb;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        var $tmp52;
        $Γ['global']['$tmp0']['release']['$tmp52'] = 0;
        $tmp52 = this.currentTcb;
        $Γ['global']['$tmp0']['release']['$tmp52'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['release']);
        $Γ['global']['$tmp0']['release']['$tmp52'] instanceof Object ? $Γ['global']['$tmp0']['release']['$tmp52'].Σ = $Γ['global']['$tmp0']['release']['$tmp52'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp52'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['release']['$tmp52'] = $Γ['global']['$tmp0']['release']['$tmp52'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['release']['$tmp52'] : $Λ[$Λ.length - 1].l;
        return $tmp52;
        var $shouldComp = { 'lbl': 'FUNC' };
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    return;
};
$Γ['global']['$tmp0']['release'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    id: $Λ[$Λ.length - 1].l
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.holdCurrent = function () {
    var $tmp53, $tmp54, $tmp55, $tmp40, $tmp56;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp56'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp55'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp54'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp53'] = 0;
    $tmp54 = this;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp54'] = $Γ['global']['$tmp0']['holdCurrent'].$this;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp54'] instanceof Object ? $Γ['global']['$tmp0']['holdCurrent']['$tmp54'].Σ = $Γ['global']['$tmp0']['holdCurrent']['$tmp54'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp54'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['holdCurrent']['$tmp54'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp54'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp54'] : $Λ[$Λ.length - 1].l;
    $tmp53 = $tmp54.holdCount++;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp53'] = sec_lvl('$tmp54', 'holdCount', false, $Γ['global']['$tmp0']['holdCurrent']);
    $Γ['global']['$tmp0']['holdCurrent']['$tmp53'] instanceof Object ? $Γ['global']['$tmp0']['holdCurrent']['$tmp53'].Σ = $Γ['global']['$tmp0']['holdCurrent']['$tmp53'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp53'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['holdCurrent']['$tmp53'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp53'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp53'] : $Λ[$Λ.length - 1].l;
    $tmp40 = this.currentTcb;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['holdCurrent']);
    $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['holdCurrent']['$tmp40'].Σ = $Γ['global']['$tmp0']['holdCurrent']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] : $Λ[$Λ.length - 1].l;
    $tmp55 = $tmp40.markAsHeld();
    $tmp40 = this.currentTcb;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['holdCurrent']);
    $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['holdCurrent']['$tmp40'].Σ = $Γ['global']['$tmp0']['holdCurrent']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp40'] : $Λ[$Λ.length - 1].l;
    $tmp56 = $tmp40.link;
    $Γ['global']['$tmp0']['holdCurrent']['$tmp56'] = sec_lvl('$tmp40', 'link', false, $Γ['global']['$tmp0']['holdCurrent']);
    $Γ['global']['$tmp0']['holdCurrent']['$tmp56'] instanceof Object ? $Γ['global']['$tmp0']['holdCurrent']['$tmp56'].Σ = $Γ['global']['$tmp0']['holdCurrent']['$tmp56'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp56'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['holdCurrent']['$tmp56'] = $Γ['global']['$tmp0']['holdCurrent']['$tmp56'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['holdCurrent']['$tmp56'] : $Λ[$Λ.length - 1].l;
    return $tmp56;
};
$Γ['global']['$tmp0']['holdCurrent'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.suspendCurrent = function () {
    var $tmp57, $tmp40, $tmp58;
    $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'] = $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'] = $Γ['global']['$tmp0']['suspendCurrent']['$tmp57'] = 0;
    $tmp40 = this.currentTcb;
    $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['suspendCurrent']);
    $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'] instanceof Object ? $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'].Σ = $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'] = $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['suspendCurrent']['$tmp40'] : $Λ[$Λ.length - 1].l;
    $tmp57 = $tmp40.markAsSuspended();
    $tmp58 = this.currentTcb;
    $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['suspendCurrent']);
    $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'] instanceof Object ? $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'].Σ = $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'] = $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['suspendCurrent']['$tmp58'] : $Λ[$Λ.length - 1].l;
    return $tmp58;
};
$Γ['global']['$tmp0']['suspendCurrent'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp0 = Scheduler.prototype;
$Γ['global']['$tmp0'] = sec_lvl('Scheduler', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp0'] instanceof Object ? $Γ['global']['$tmp0'].Σ = $Γ['global']['$tmp0'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0'] = $Γ['global']['$tmp0'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0'] : $Λ[$Λ.length - 1].l;
$tmp0.queue = function (packet) {
    var t, $tmp42, $tmp59, $tmp60, $tmp61, $tmp62, $tmp63, $tmp64;
    $Γ['global']['$tmp0']['queue']['$tmp64'] = $Γ['global']['$tmp0']['queue']['$tmp63'] = $Γ['global']['$tmp0']['queue']['$tmp62'] = $Γ['global']['$tmp0']['queue']['$tmp61'] = $Γ['global']['$tmp0']['queue']['$tmp60'] = $Γ['global']['$tmp0']['queue']['$tmp59'] = $Γ['global']['$tmp0']['queue']['$tmp42'] = $Γ['global']['$tmp0']['queue']['t'] = 0;
    $tmp42 = this.blocks;
    $Γ['global']['$tmp0']['queue']['$tmp42'] = sec_lvl('$tmp0', 'blocks', false, $Γ['global']['$tmp0']['queue']);
    $Γ['global']['$tmp0']['queue']['$tmp42'] instanceof Object ? $Γ['global']['$tmp0']['queue']['$tmp42'].Σ = $Γ['global']['$tmp0']['queue']['$tmp42'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp42'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['queue']['$tmp42'] = $Γ['global']['$tmp0']['queue']['$tmp42'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp42'] : $Λ[$Λ.length - 1].l;
    $tmp59 = packet.id;
    $Γ['global']['$tmp0']['queue']['$tmp59'] = sec_lvl('packet', 'id', false, $Γ['global']['$tmp0']['queue']);
    $Γ['global']['$tmp0']['queue']['$tmp59'] instanceof Object ? $Γ['global']['$tmp0']['queue']['$tmp59'].Σ = $Γ['global']['$tmp0']['queue']['$tmp59'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp59'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['queue']['$tmp59'] = $Γ['global']['$tmp0']['queue']['$tmp59'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp59'] : $Λ[$Λ.length - 1].l;
    t = $tmp42[$tmp59];
    $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'] = sec_lvl('$tmp42', $tmp59, false, $Γ['global']['$tmp0']['queue']);
    $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'] instanceof Object ? $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'].Σ = $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'] = $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp0']['queue'], 't', true)['t'] : $Λ[$Λ.length - 1].l;
    $tmp60 = t == null;
    $Γ['global']['$tmp0']['queue']['$tmp60'] = sec_lvl('t', null, true, $Γ['global']['$tmp0']['queue']) >= $Λ[$Λ.length - 1].l ? sec_lvl('t', null, true, $Γ['global']['$tmp0']['queue']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp0']['queue']['$tmp60'] instanceof Object ? $Γ['global']['$tmp0']['queue']['$tmp60'].Σ = $Γ['global']['$tmp0']['queue']['$tmp60'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp60'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['queue']['$tmp60'] = $Γ['global']['$tmp0']['queue']['$tmp60'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp60'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp60', null, true, $Γ['global']['$tmp0']['queue']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp60', null, true, $Γ['global']['$tmp0']['queue']),
        id: 'IF'
    });
    if ($tmp60) {
        return t;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp62 = this;
    $Γ['global']['$tmp0']['queue']['$tmp62'] = $Γ['global']['$tmp0']['queue'].$this;
    $Γ['global']['$tmp0']['queue']['$tmp62'] instanceof Object ? $Γ['global']['$tmp0']['queue']['$tmp62'].Σ = $Γ['global']['$tmp0']['queue']['$tmp62'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp62'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['queue']['$tmp62'] = $Γ['global']['$tmp0']['queue']['$tmp62'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp62'] : $Λ[$Λ.length - 1].l;
    $tmp61 = $tmp62.queueCount++;
    $Γ['global']['$tmp0']['queue']['$tmp61'] = sec_lvl('$tmp62', 'queueCount', false, $Γ['global']['$tmp0']['queue']);
    $Γ['global']['$tmp0']['queue']['$tmp61'] instanceof Object ? $Γ['global']['$tmp0']['queue']['$tmp61'].Σ = $Γ['global']['$tmp0']['queue']['$tmp61'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp61'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['queue']['$tmp61'] = $Γ['global']['$tmp0']['queue']['$tmp61'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp61'] : $Λ[$Λ.length - 1].l;
    packet.link = null;
    $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['link'] = $Λ[$Λ.length - 1].l;
    packet.id = this.currentId;
    $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'] = sec_lvl('$tmp0', 'currentId', false, $Γ['global']['$tmp0']['queue']);
    $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'] instanceof Object ? $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'].Σ = $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'] = $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp0']['queue'], 'packet', false)['id'] : $Λ[$Λ.length - 1].l;
    $tmp64 = this.currentTcb;
    $Γ['global']['$tmp0']['queue']['$tmp64'] = sec_lvl('$tmp0', 'currentTcb', false, $Γ['global']['$tmp0']['queue']);
    $Γ['global']['$tmp0']['queue']['$tmp64'] instanceof Object ? $Γ['global']['$tmp0']['queue']['$tmp64'].Σ = $Γ['global']['$tmp0']['queue']['$tmp64'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp64'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp0']['queue']['$tmp64'] = $Γ['global']['$tmp0']['queue']['$tmp64'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp0']['queue']['$tmp64'] : $Λ[$Λ.length - 1].l;
    $tmp63 = t.checkPriorityAdd($tmp64, packet);
    return $tmp63;
};
$Γ['global']['$tmp0']['queue'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    packet: $Λ[$Λ.length - 1].l
};
function TaskControlBlock(link, id, priority, queue, task) {
    this.link = link;
    $Γ['global']['TaskControlBlock']['$this']['link'] = sec_lvl('link', null, false, $Γ['global']['TaskControlBlock']);
    $Γ['global']['TaskControlBlock']['$this']['link'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['link'].Σ = $Γ['global']['TaskControlBlock']['$this']['link'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['link'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['link'] = $Γ['global']['TaskControlBlock']['$this']['link'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['link'] : $Λ[$Λ.length - 1].l;
    this.id = id;
    $Γ['global']['TaskControlBlock']['$this']['id'] = sec_lvl('id', null, false, $Γ['global']['TaskControlBlock']);
    $Γ['global']['TaskControlBlock']['$this']['id'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['id'].Σ = $Γ['global']['TaskControlBlock']['$this']['id'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['id'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['id'] = $Γ['global']['TaskControlBlock']['$this']['id'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['id'] : $Λ[$Λ.length - 1].l;
    this.priority = priority;
    $Γ['global']['TaskControlBlock']['$this']['priority'] = sec_lvl('priority', null, false, $Γ['global']['TaskControlBlock']);
    $Γ['global']['TaskControlBlock']['$this']['priority'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['priority'].Σ = $Γ['global']['TaskControlBlock']['$this']['priority'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['priority'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['priority'] = $Γ['global']['TaskControlBlock']['$this']['priority'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['priority'] : $Λ[$Λ.length - 1].l;
    this.queue = queue;
    $Γ['global']['TaskControlBlock']['$this']['queue'] = sec_lvl('queue', null, false, $Γ['global']['TaskControlBlock']);
    $Γ['global']['TaskControlBlock']['$this']['queue'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['queue'].Σ = $Γ['global']['TaskControlBlock']['$this']['queue'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['queue'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['queue'] = $Γ['global']['TaskControlBlock']['$this']['queue'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['queue'] : $Λ[$Λ.length - 1].l;
    this.task = task;
    $Γ['global']['TaskControlBlock']['$this']['task'] = sec_lvl('task', null, false, $Γ['global']['TaskControlBlock']);
    $Γ['global']['TaskControlBlock']['$this']['task'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['task'].Σ = $Γ['global']['TaskControlBlock']['$this']['task'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['task'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['task'] = $Γ['global']['TaskControlBlock']['$this']['task'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['task'] : $Λ[$Λ.length - 1].l;
    var $tmp65;
    $Γ['global']['TaskControlBlock']['$tmp65'] = 0;
    $tmp65 = queue == null;
    $Γ['global']['TaskControlBlock']['$tmp65'] = sec_lvl('queue', null, true, $Γ['global']['TaskControlBlock']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['TaskControlBlock']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['TaskControlBlock']['$tmp65'] instanceof Object ? $Γ['global']['TaskControlBlock']['$tmp65'].Σ = $Γ['global']['TaskControlBlock']['$tmp65'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$tmp65'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$tmp65'] = $Γ['global']['TaskControlBlock']['$tmp65'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$tmp65'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp65', null, true, $Γ['global']['TaskControlBlock']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp65', null, true, $Γ['global']['TaskControlBlock']),
        id: 'IF'
    });
    if ($tmp65) {
        this.state = STATE_SUSPENDED;
        $Γ['global']['TaskControlBlock']['$this']['state'] = sec_lvl('STATE_SUSPENDED', null, false, $Γ['global']['TaskControlBlock']);
        $Γ['global']['TaskControlBlock']['$this']['state'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['state'].Σ = $Γ['global']['TaskControlBlock']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['state'] = $Γ['global']['TaskControlBlock']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['state'] : $Λ[$Λ.length - 1].l;
    } else {
        this.state = STATE_SUSPENDED_RUNNABLE;
        $Γ['global']['TaskControlBlock']['$this']['state'] = sec_lvl('STATE_SUSPENDED_RUNNABLE', null, false, $Γ['global']['TaskControlBlock']);
        $Γ['global']['TaskControlBlock']['$this']['state'] instanceof Object ? $Γ['global']['TaskControlBlock']['$this']['state'].Σ = $Γ['global']['TaskControlBlock']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['TaskControlBlock']['$this']['state'] = $Γ['global']['TaskControlBlock']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['TaskControlBlock']['$this']['state'] : $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    return;
}
STATE_RUNNING = 0;
$Γ['global']['STATE_RUNNING'] = $Λ[$Λ.length - 1].l;
STATE_RUNNABLE = 1;
$Γ['global']['STATE_RUNNABLE'] = $Λ[$Λ.length - 1].l;
STATE_SUSPENDED = 2;
$Γ['global']['STATE_SUSPENDED'] = $Λ[$Λ.length - 1].l;
STATE_HELD = 4;
$Γ['global']['STATE_HELD'] = $Λ[$Λ.length - 1].l;
STATE_SUSPENDED_RUNNABLE = STATE_SUSPENDED | STATE_RUNNABLE;
$Γ['global']['STATE_SUSPENDED_RUNNABLE'] = sec_lvl('STATE_SUSPENDED', null, true, $Γ['global']) >= sec_lvl('STATE_RUNNABLE', null, true, $Γ['global']) ? sec_lvl('STATE_SUSPENDED', null, true, $Γ['global']) : sec_lvl('STATE_RUNNABLE', null, true, $Γ['global']);
$Γ['global']['STATE_SUSPENDED_RUNNABLE'] instanceof Object ? $Γ['global']['STATE_SUSPENDED_RUNNABLE'].Σ = $Γ['global']['STATE_SUSPENDED_RUNNABLE'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['STATE_SUSPENDED_RUNNABLE'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['STATE_SUSPENDED_RUNNABLE'] = $Γ['global']['STATE_SUSPENDED_RUNNABLE'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['STATE_SUSPENDED_RUNNABLE'] : $Λ[$Λ.length - 1].l;
STATE_NOT_HELD = ~STATE_HELD;
$Γ['global']['STATE_NOT_HELD'] = sec_lvl('STATE_HELD', null, false, $Γ['global']);
$Γ['global']['STATE_NOT_HELD'] instanceof Object ? $Γ['global']['STATE_NOT_HELD'].Σ = $Γ['global']['STATE_NOT_HELD'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['STATE_NOT_HELD'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['STATE_NOT_HELD'] = $Γ['global']['STATE_NOT_HELD'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['STATE_NOT_HELD'] : $Λ[$Λ.length - 1].l;
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.setRunning = function () {
    this.state = STATE_RUNNING;
    $Γ['global']['$tmp1']['setRunning']['$this']['state'] = sec_lvl('STATE_RUNNING', null, false, $Γ['global']['$tmp1']['setRunning']);
    $Γ['global']['$tmp1']['setRunning']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['setRunning']['$this']['state'].Σ = $Γ['global']['$tmp1']['setRunning']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['setRunning']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['setRunning']['$this']['state'] = $Γ['global']['$tmp1']['setRunning']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['setRunning']['$this']['state'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp1']['setRunning'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.markAsNotHeld = function () {
    var $tmp66;
    $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'] = 0;
    $tmp66 = this.state;
    $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['markAsNotHeld']);
    $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'] instanceof Object ? $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'].Σ = $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'] = $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsNotHeld']['$tmp66'] : $Λ[$Λ.length - 1].l;
    this.state = $tmp66 & STATE_NOT_HELD;
    $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'] = sec_lvl('$tmp66', null, true, $Γ['global']['$tmp1']['markAsNotHeld']) >= sec_lvl('STATE_NOT_HELD', null, true, $Γ['global']['$tmp1']['markAsNotHeld']) ? sec_lvl('$tmp66', null, true, $Γ['global']['$tmp1']['markAsNotHeld']) : sec_lvl('STATE_NOT_HELD', null, true, $Γ['global']['$tmp1']['markAsNotHeld']);
    $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'].Σ = $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'] = $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsNotHeld']['$this']['state'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp1']['markAsNotHeld'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.markAsHeld = function () {
    var $tmp67;
    $Γ['global']['$tmp1']['markAsHeld']['$tmp67'] = 0;
    $tmp67 = this.state;
    $Γ['global']['$tmp1']['markAsHeld']['$tmp67'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['markAsHeld']);
    $Γ['global']['$tmp1']['markAsHeld']['$tmp67'] instanceof Object ? $Γ['global']['$tmp1']['markAsHeld']['$tmp67'].Σ = $Γ['global']['$tmp1']['markAsHeld']['$tmp67'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsHeld']['$tmp67'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsHeld']['$tmp67'] = $Γ['global']['$tmp1']['markAsHeld']['$tmp67'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsHeld']['$tmp67'] : $Λ[$Λ.length - 1].l;
    this.state = $tmp67 | STATE_HELD;
    $Γ['global']['$tmp1']['markAsHeld']['$this']['state'] = sec_lvl('$tmp67', null, true, $Γ['global']['$tmp1']['markAsHeld']) >= sec_lvl('STATE_HELD', null, true, $Γ['global']['$tmp1']['markAsHeld']) ? sec_lvl('$tmp67', null, true, $Γ['global']['$tmp1']['markAsHeld']) : sec_lvl('STATE_HELD', null, true, $Γ['global']['$tmp1']['markAsHeld']);
    $Γ['global']['$tmp1']['markAsHeld']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['markAsHeld']['$this']['state'].Σ = $Γ['global']['$tmp1']['markAsHeld']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsHeld']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsHeld']['$this']['state'] = $Γ['global']['$tmp1']['markAsHeld']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsHeld']['$this']['state'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp1']['markAsHeld'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.isHeldOrSuspended = function () {
    var $tmp68, $tmp69, $tmp70, $tmp71, $tmp72, $tmp73;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'] = 0;
    $tmp71 = this.state;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['isHeldOrSuspended']);
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'] instanceof Object ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'].Σ = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp71'] : $Λ[$Λ.length - 1].l;
    $tmp70 = $tmp71 & STATE_HELD;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'] = sec_lvl('$tmp71', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) >= sec_lvl('STATE_HELD', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) ? sec_lvl('$tmp71', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) : sec_lvl('STATE_HELD', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']);
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'] instanceof Object ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'].Σ = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp70'] : $Λ[$Λ.length - 1].l;
    $tmp69 = $tmp70 != 0;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'] = sec_lvl('$tmp70', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp70', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'] instanceof Object ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'].Σ = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp69'] : $Λ[$Λ.length - 1].l;
    $tmp73 = this.state;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['isHeldOrSuspended']);
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'] instanceof Object ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'].Σ = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp73'] : $Λ[$Λ.length - 1].l;
    $tmp72 = $tmp73 == STATE_SUSPENDED;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'] = sec_lvl('$tmp73', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) >= sec_lvl('STATE_SUSPENDED', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) ? sec_lvl('$tmp73', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) : sec_lvl('STATE_SUSPENDED', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']);
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'] instanceof Object ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'].Σ = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp72'] : $Λ[$Λ.length - 1].l;
    $tmp68 = $tmp69 || $tmp72;
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'] = sec_lvl('$tmp69', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) >= sec_lvl('$tmp72', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) ? sec_lvl('$tmp69', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']) : sec_lvl('$tmp72', null, true, $Γ['global']['$tmp1']['isHeldOrSuspended']);
    $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'] instanceof Object ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'].Σ = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'] = $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['isHeldOrSuspended']['$tmp68'] : $Λ[$Λ.length - 1].l;
    return $tmp68;
};
$Γ['global']['$tmp1']['isHeldOrSuspended'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.markAsSuspended = function () {
    var $tmp74;
    $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'] = 0;
    $tmp74 = this.state;
    $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['markAsSuspended']);
    $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'] instanceof Object ? $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'].Σ = $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'] = $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsSuspended']['$tmp74'] : $Λ[$Λ.length - 1].l;
    this.state = $tmp74 | STATE_SUSPENDED;
    $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'] = sec_lvl('$tmp74', null, true, $Γ['global']['$tmp1']['markAsSuspended']) >= sec_lvl('STATE_SUSPENDED', null, true, $Γ['global']['$tmp1']['markAsSuspended']) ? sec_lvl('$tmp74', null, true, $Γ['global']['$tmp1']['markAsSuspended']) : sec_lvl('STATE_SUSPENDED', null, true, $Γ['global']['$tmp1']['markAsSuspended']);
    $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'].Σ = $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'] = $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsSuspended']['$this']['state'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp1']['markAsSuspended'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.markAsRunnable = function () {
    var $tmp75;
    $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'] = 0;
    $tmp75 = this.state;
    $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['markAsRunnable']);
    $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'] instanceof Object ? $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'].Σ = $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'] = $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsRunnable']['$tmp75'] : $Λ[$Λ.length - 1].l;
    this.state = $tmp75 | STATE_RUNNABLE;
    $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'] = sec_lvl('$tmp75', null, true, $Γ['global']['$tmp1']['markAsRunnable']) >= sec_lvl('STATE_RUNNABLE', null, true, $Γ['global']['$tmp1']['markAsRunnable']) ? sec_lvl('$tmp75', null, true, $Γ['global']['$tmp1']['markAsRunnable']) : sec_lvl('STATE_RUNNABLE', null, true, $Γ['global']['$tmp1']['markAsRunnable']);
    $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'].Σ = $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'] = $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['markAsRunnable']['$this']['state'] : $Λ[$Λ.length - 1].l;
    return;
};
$Γ['global']['$tmp1']['markAsRunnable'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.run = function () {
    var packet, $tmp76, $tmp77, $tmp78, $tmp79;
    $Γ['global']['$tmp1']['run']['$tmp79'] = $Γ['global']['$tmp1']['run']['$tmp78'] = $Γ['global']['$tmp1']['run']['$tmp77'] = $Γ['global']['$tmp1']['run']['$tmp76'] = $Γ['global']['$tmp1']['run']['packet'] = 0;
    $tmp77 = this.state;
    $Γ['global']['$tmp1']['run']['$tmp77'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['run']);
    $Γ['global']['$tmp1']['run']['$tmp77'] instanceof Object ? $Γ['global']['$tmp1']['run']['$tmp77'].Σ = $Γ['global']['$tmp1']['run']['$tmp77'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp77'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$tmp77'] = $Γ['global']['$tmp1']['run']['$tmp77'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp77'] : $Λ[$Λ.length - 1].l;
    $tmp76 = $tmp77 == STATE_SUSPENDED_RUNNABLE;
    $Γ['global']['$tmp1']['run']['$tmp76'] = sec_lvl('$tmp77', null, true, $Γ['global']['$tmp1']['run']) >= sec_lvl('STATE_SUSPENDED_RUNNABLE', null, true, $Γ['global']['$tmp1']['run']) ? sec_lvl('$tmp77', null, true, $Γ['global']['$tmp1']['run']) : sec_lvl('STATE_SUSPENDED_RUNNABLE', null, true, $Γ['global']['$tmp1']['run']);
    $Γ['global']['$tmp1']['run']['$tmp76'] instanceof Object ? $Γ['global']['$tmp1']['run']['$tmp76'].Σ = $Γ['global']['$tmp1']['run']['$tmp76'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp76'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$tmp76'] = $Γ['global']['$tmp1']['run']['$tmp76'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp76'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp76', null, true, $Γ['global']['$tmp1']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp76', null, true, $Γ['global']['$tmp1']['run']),
        id: 'IF'
    });
    if ($tmp76) {
        packet = this.queue;
        $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'] = sec_lvl('$tmp1', 'queue', false, $Γ['global']['$tmp1']['run']);
        $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'] instanceof Object ? $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'].Σ = $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'] = $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'] : $Λ[$Λ.length - 1].l;
        this.queue = packet.link;
        $Γ['global']['$tmp1']['run']['$this']['queue'] = sec_lvl('packet', 'link', false, $Γ['global']['$tmp1']['run']);
        $Γ['global']['$tmp1']['run']['$this']['queue'] instanceof Object ? $Γ['global']['$tmp1']['run']['$this']['queue'].Σ = $Γ['global']['$tmp1']['run']['$this']['queue'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$this']['queue'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$this']['queue'] = $Γ['global']['$tmp1']['run']['$this']['queue'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$this']['queue'] : $Λ[$Λ.length - 1].l;
        var $tmp80, $tmp81;
        $Γ['global']['$tmp1']['run']['$tmp81'] = $Γ['global']['$tmp1']['run']['$tmp80'] = 0;
        $tmp81 = this.queue;
        $Γ['global']['$tmp1']['run']['$tmp81'] = sec_lvl('$tmp1', 'queue', false, $Γ['global']['$tmp1']['run']);
        $Γ['global']['$tmp1']['run']['$tmp81'] instanceof Object ? $Γ['global']['$tmp1']['run']['$tmp81'].Σ = $Γ['global']['$tmp1']['run']['$tmp81'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp81'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$tmp81'] = $Γ['global']['$tmp1']['run']['$tmp81'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp81'] : $Λ[$Λ.length - 1].l;
        $tmp80 = $tmp81 == null;
        $Γ['global']['$tmp1']['run']['$tmp80'] = sec_lvl('$tmp81', null, true, $Γ['global']['$tmp1']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp81', null, true, $Γ['global']['$tmp1']['run']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp1']['run']['$tmp80'] instanceof Object ? $Γ['global']['$tmp1']['run']['$tmp80'].Σ = $Γ['global']['$tmp1']['run']['$tmp80'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp80'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$tmp80'] = $Γ['global']['$tmp1']['run']['$tmp80'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp80'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp80', null, true, $Γ['global']['$tmp1']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp80', null, true, $Γ['global']['$tmp1']['run']),
            id: 'IF'
        });
        if ($tmp80) {
            this.state = STATE_RUNNING;
            $Γ['global']['$tmp1']['run']['$this']['state'] = sec_lvl('STATE_RUNNING', null, false, $Γ['global']['$tmp1']['run']);
            $Γ['global']['$tmp1']['run']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['run']['$this']['state'].Σ = $Γ['global']['$tmp1']['run']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$this']['state'] = $Γ['global']['$tmp1']['run']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$this']['state'] : $Λ[$Λ.length - 1].l;
        } else {
            this.state = STATE_RUNNABLE;
            $Γ['global']['$tmp1']['run']['$this']['state'] = sec_lvl('STATE_RUNNABLE', null, false, $Γ['global']['$tmp1']['run']);
            $Γ['global']['$tmp1']['run']['$this']['state'] instanceof Object ? $Γ['global']['$tmp1']['run']['$this']['state'].Σ = $Γ['global']['$tmp1']['run']['$this']['state'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$this']['state'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$this']['state'] = $Γ['global']['$tmp1']['run']['$this']['state'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$this']['state'] : $Λ[$Λ.length - 1].l;
        }
        $Λ.pop();
    } else {
        packet = null;
        $scope($Γ['global']['$tmp1']['run'], 'packet', true)['packet'] = $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    $tmp79 = this.task;
    $Γ['global']['$tmp1']['run']['$tmp79'] = sec_lvl('$tmp1', 'task', false, $Γ['global']['$tmp1']['run']);
    $Γ['global']['$tmp1']['run']['$tmp79'] instanceof Object ? $Γ['global']['$tmp1']['run']['$tmp79'].Σ = $Γ['global']['$tmp1']['run']['$tmp79'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp79'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['run']['$tmp79'] = $Γ['global']['$tmp1']['run']['$tmp79'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['run']['$tmp79'] : $Λ[$Λ.length - 1].l;
    $tmp78 = $tmp79.run(packet);
    return $tmp78;
};
$Γ['global']['$tmp1']['run'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.checkPriorityAdd = function (task, packet) {
    var $tmp82, $tmp83;
    $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'] = 0;
    $tmp83 = this.queue;
    $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'] = sec_lvl('$tmp1', 'queue', false, $Γ['global']['$tmp1']['checkPriorityAdd']);
    $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp83'] : $Λ[$Λ.length - 1].l;
    $tmp82 = $tmp83 == null;
    $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'] = sec_lvl('$tmp83', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp83', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp82'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp82', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp82', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']),
        id: 'IF'
    });
    if ($tmp82) {
        $upgrade(['this'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp1']['checkPriorityAdd']);
        this.queue = packet;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'] = sec_lvl('packet', null, false, $Γ['global']['$tmp1']['checkPriorityAdd']);
        $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$this']['queue'] : $Λ[$Λ.length - 1].l;
        var $tmp84, $tmp85, $tmp86, $tmp87;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'] = 0;
        $rf = $prop('$tmp1', 'markAsRunnable', $Γ['global']['$tmp1']['checkPriorityAdd']);
        $rf.scope = $Γ['global']['$tmp1']['checkPriorityAdd'];
        $rf.$this = $Γ['global']['$tmp1']['checkPriorityAdd']['$this'];
        $Λ.push({
            l: $rf.$fscope,
            id: 'FUNC'
        });
        $tmp84 = this.markAsRunnable();
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'] = $Λ.pop().l;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp84'] : $Λ[$Λ.length - 1].l;
        $tmp86 = this.priority;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'] = sec_lvl('$tmp1', 'priority', false, $Γ['global']['$tmp1']['checkPriorityAdd']);
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp86'] : $Λ[$Λ.length - 1].l;
        $tmp87 = task.priority;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'] = sec_lvl('task', 'priority', false, $Γ['global']['$tmp1']['checkPriorityAdd']);
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp87'] : $Λ[$Λ.length - 1].l;
        $tmp85 = $tmp86 > $tmp87;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'] = sec_lvl('$tmp86', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) >= sec_lvl('$tmp87', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) ? sec_lvl('$tmp86', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) : sec_lvl('$tmp87', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']);
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp85'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp85', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp85', null, true, $Γ['global']['$tmp1']['checkPriorityAdd']),
            id: 'IF'
        });
        if ($tmp85) {
            var $tmp88;
            $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'] = 0;
            $tmp88 = this;
            $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'] = $Γ['global']['$tmp1']['checkPriorityAdd'].$this;
            $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp88'] : $Λ[$Λ.length - 1].l;
            return $tmp88;
            var $shouldComp = { 'lbl': 'FUNC' };
        } else {
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
    } else {
        $upgrade(['$tmp84'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp1']['checkPriorityAdd']);
        var $tmp89;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'] = 0;
        $tmp89 = this.queue;
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'] = sec_lvl('$tmp1', 'queue', false, $Γ['global']['$tmp1']['checkPriorityAdd']);
        $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'] instanceof Object ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'].Σ = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'] = $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['checkPriorityAdd']['$tmp89'] : $Λ[$Λ.length - 1].l;
        this.queue = packet.addTo($tmp89);
    }
    $Λ.pop();
    return task;
};
$Γ['global']['$tmp1']['checkPriorityAdd'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    task: $Λ[$Λ.length - 1].l,
    packet: $Λ[$Λ.length - 1].l
};
$tmp1 = TaskControlBlock.prototype;
$Γ['global']['$tmp1'] = sec_lvl('TaskControlBlock', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp1'] instanceof Object ? $Γ['global']['$tmp1'].Σ = $Γ['global']['$tmp1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1'] = $Γ['global']['$tmp1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1'] : $Λ[$Λ.length - 1].l;
$tmp1.toString = function () {
    var $tmp90, $tmp91, $tmp92, $tmp93, $tmp94, $tmp95;
    $Γ['global']['$tmp1']['toString']['$tmp95'] = $Γ['global']['$tmp1']['toString']['$tmp94'] = $Γ['global']['$tmp1']['toString']['$tmp93'] = $Γ['global']['$tmp1']['toString']['$tmp92'] = $Γ['global']['$tmp1']['toString']['$tmp91'] = $Γ['global']['$tmp1']['toString']['$tmp90'] = 0;
    $tmp94 = this.task;
    $Γ['global']['$tmp1']['toString']['$tmp94'] = sec_lvl('$tmp1', 'task', false, $Γ['global']['$tmp1']['toString']);
    $Γ['global']['$tmp1']['toString']['$tmp94'] instanceof Object ? $Γ['global']['$tmp1']['toString']['$tmp94'].Σ = $Γ['global']['$tmp1']['toString']['$tmp94'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp94'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['toString']['$tmp94'] = $Γ['global']['$tmp1']['toString']['$tmp94'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp94'] : $Λ[$Λ.length - 1].l;
    $tmp93 = 'tcb { ' + $tmp94;
    $Γ['global']['$tmp1']['toString']['$tmp93'] = $Λ[$Λ.length - 1].l >= sec_lvl('$tmp94', null, true, $Γ['global']['$tmp1']['toString']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp94', null, true, $Γ['global']['$tmp1']['toString']);
    $Γ['global']['$tmp1']['toString']['$tmp93'] instanceof Object ? $Γ['global']['$tmp1']['toString']['$tmp93'].Σ = $Γ['global']['$tmp1']['toString']['$tmp93'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp93'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['toString']['$tmp93'] = $Γ['global']['$tmp1']['toString']['$tmp93'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp93'] : $Λ[$Λ.length - 1].l;
    $tmp92 = $tmp93 + '@';
    $Γ['global']['$tmp1']['toString']['$tmp92'] = sec_lvl('$tmp93', null, true, $Γ['global']['$tmp1']['toString']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp93', null, true, $Γ['global']['$tmp1']['toString']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp1']['toString']['$tmp92'] instanceof Object ? $Γ['global']['$tmp1']['toString']['$tmp92'].Σ = $Γ['global']['$tmp1']['toString']['$tmp92'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp92'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['toString']['$tmp92'] = $Γ['global']['$tmp1']['toString']['$tmp92'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp92'] : $Λ[$Λ.length - 1].l;
    $tmp95 = this.state;
    $Γ['global']['$tmp1']['toString']['$tmp95'] = sec_lvl('$tmp1', 'state', false, $Γ['global']['$tmp1']['toString']);
    $Γ['global']['$tmp1']['toString']['$tmp95'] instanceof Object ? $Γ['global']['$tmp1']['toString']['$tmp95'].Σ = $Γ['global']['$tmp1']['toString']['$tmp95'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp95'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['toString']['$tmp95'] = $Γ['global']['$tmp1']['toString']['$tmp95'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp95'] : $Λ[$Λ.length - 1].l;
    $tmp91 = $tmp92 + $tmp95;
    $Γ['global']['$tmp1']['toString']['$tmp91'] = sec_lvl('$tmp92', null, true, $Γ['global']['$tmp1']['toString']) >= sec_lvl('$tmp95', null, true, $Γ['global']['$tmp1']['toString']) ? sec_lvl('$tmp92', null, true, $Γ['global']['$tmp1']['toString']) : sec_lvl('$tmp95', null, true, $Γ['global']['$tmp1']['toString']);
    $Γ['global']['$tmp1']['toString']['$tmp91'] instanceof Object ? $Γ['global']['$tmp1']['toString']['$tmp91'].Σ = $Γ['global']['$tmp1']['toString']['$tmp91'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp91'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['toString']['$tmp91'] = $Γ['global']['$tmp1']['toString']['$tmp91'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp91'] : $Λ[$Λ.length - 1].l;
    $tmp90 = $tmp91 + ' }';
    $Γ['global']['$tmp1']['toString']['$tmp90'] = sec_lvl('$tmp91', null, true, $Γ['global']['$tmp1']['toString']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp91', null, true, $Γ['global']['$tmp1']['toString']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp1']['toString']['$tmp90'] instanceof Object ? $Γ['global']['$tmp1']['toString']['$tmp90'].Σ = $Γ['global']['$tmp1']['toString']['$tmp90'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp90'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp1']['toString']['$tmp90'] = $Γ['global']['$tmp1']['toString']['$tmp90'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp1']['toString']['$tmp90'] : $Λ[$Λ.length - 1].l;
    return $tmp90;
};
$Γ['global']['$tmp1']['toString'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function IdleTask(scheduler, v1, count) {
    this.scheduler = scheduler;
    $Γ['global']['IdleTask']['$this']['scheduler'] = sec_lvl('scheduler', null, false, $Γ['global']['IdleTask']);
    $Γ['global']['IdleTask']['$this']['scheduler'] instanceof Object ? $Γ['global']['IdleTask']['$this']['scheduler'].Σ = $Γ['global']['IdleTask']['$this']['scheduler'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['IdleTask']['$this']['scheduler'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['IdleTask']['$this']['scheduler'] = $Γ['global']['IdleTask']['$this']['scheduler'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['IdleTask']['$this']['scheduler'] : $Λ[$Λ.length - 1].l;
    this.v1 = v1;
    $Γ['global']['IdleTask']['$this']['v1'] = sec_lvl('v1', null, false, $Γ['global']['IdleTask']);
    $Γ['global']['IdleTask']['$this']['v1'] instanceof Object ? $Γ['global']['IdleTask']['$this']['v1'].Σ = $Γ['global']['IdleTask']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['IdleTask']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['IdleTask']['$this']['v1'] = $Γ['global']['IdleTask']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['IdleTask']['$this']['v1'] : $Λ[$Λ.length - 1].l;
    this.count = count;
    $Γ['global']['IdleTask']['$this']['count'] = sec_lvl('count', null, false, $Γ['global']['IdleTask']);
    $Γ['global']['IdleTask']['$this']['count'] instanceof Object ? $Γ['global']['IdleTask']['$this']['count'].Σ = $Γ['global']['IdleTask']['$this']['count'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['IdleTask']['$this']['count'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['IdleTask']['$this']['count'] = $Γ['global']['IdleTask']['$this']['count'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['IdleTask']['$this']['count'] : $Λ[$Λ.length - 1].l;
    return;
}
$tmp2 = IdleTask.prototype;
$Γ['global']['$tmp2'] = sec_lvl('IdleTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $Γ['global']['$tmp2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2'] = $Γ['global']['$tmp2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2'] : $Λ[$Λ.length - 1].l;
$tmp2.run = function (packet) {
    var $tmp96, $tmp97, $tmp98, $tmp99, $tmp100, $tmp101, $tmp102;
    $Γ['global']['$tmp2']['run']['$tmp102'] = $Γ['global']['$tmp2']['run']['$tmp101'] = $Γ['global']['$tmp2']['run']['$tmp100'] = $Γ['global']['$tmp2']['run']['$tmp99'] = $Γ['global']['$tmp2']['run']['$tmp98'] = $Γ['global']['$tmp2']['run']['$tmp97'] = $Γ['global']['$tmp2']['run']['$tmp96'] = 0;
    $tmp97 = this;
    $Γ['global']['$tmp2']['run']['$tmp97'] = $Γ['global']['$tmp2']['run'].$this;
    $Γ['global']['$tmp2']['run']['$tmp97'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp97'].Σ = $Γ['global']['$tmp2']['run']['$tmp97'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp97'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp97'] = $Γ['global']['$tmp2']['run']['$tmp97'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp97'] : $Λ[$Λ.length - 1].l;
    $tmp96 = $tmp97.count--;
    $Γ['global']['$tmp2']['run']['$tmp96'] = sec_lvl('$tmp97', 'count', false, $Γ['global']['$tmp2']['run']);
    $Γ['global']['$tmp2']['run']['$tmp96'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp96'].Σ = $Γ['global']['$tmp2']['run']['$tmp96'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp96'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp96'] = $Γ['global']['$tmp2']['run']['$tmp96'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp96'] : $Λ[$Λ.length - 1].l;
    $tmp99 = this.count;
    $Γ['global']['$tmp2']['run']['$tmp99'] = sec_lvl('$tmp2', 'count', false, $Γ['global']['$tmp2']['run']);
    $Γ['global']['$tmp2']['run']['$tmp99'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp99'].Σ = $Γ['global']['$tmp2']['run']['$tmp99'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp99'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp99'] = $Γ['global']['$tmp2']['run']['$tmp99'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp99'] : $Λ[$Λ.length - 1].l;
    $tmp98 = $tmp99 == 0;
    $Γ['global']['$tmp2']['run']['$tmp98'] = sec_lvl('$tmp99', null, true, $Γ['global']['$tmp2']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp99', null, true, $Γ['global']['$tmp2']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp2']['run']['$tmp98'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp98'].Σ = $Γ['global']['$tmp2']['run']['$tmp98'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp98'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp98'] = $Γ['global']['$tmp2']['run']['$tmp98'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp98'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp98', null, true, $Γ['global']['$tmp2']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp98', null, true, $Γ['global']['$tmp2']['run']),
        id: 'IF'
    });
    if ($tmp98) {
        var $tmp103, $tmp104;
        $Γ['global']['$tmp2']['run']['$tmp104'] = $Γ['global']['$tmp2']['run']['$tmp103'] = 0;
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp2']['run']['$tmp104'] = sec_lvl('$tmp2', 'scheduler', false, $Γ['global']['$tmp2']['run']);
        $Γ['global']['$tmp2']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp104'].Σ = $Γ['global']['$tmp2']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp104'] = $Γ['global']['$tmp2']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp103 = $tmp104.holdCurrent();
        return $tmp103;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade(['$tmp103'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp2']['run']);
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    $tmp102 = this.v1;
    $Γ['global']['$tmp2']['run']['$tmp102'] = sec_lvl('$tmp2', 'v1', false, $Γ['global']['$tmp2']['run']);
    $Γ['global']['$tmp2']['run']['$tmp102'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp102'].Σ = $Γ['global']['$tmp2']['run']['$tmp102'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp102'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp102'] = $Γ['global']['$tmp2']['run']['$tmp102'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp102'] : $Λ[$Λ.length - 1].l;
    $tmp101 = $tmp102 & 1;
    $Γ['global']['$tmp2']['run']['$tmp101'] = sec_lvl('$tmp102', null, true, $Γ['global']['$tmp2']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp102', null, true, $Γ['global']['$tmp2']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp2']['run']['$tmp101'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp101'].Σ = $Γ['global']['$tmp2']['run']['$tmp101'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp101'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp101'] = $Γ['global']['$tmp2']['run']['$tmp101'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp101'] : $Λ[$Λ.length - 1].l;
    $tmp100 = $tmp101 == 0;
    $Γ['global']['$tmp2']['run']['$tmp100'] = sec_lvl('$tmp101', null, true, $Γ['global']['$tmp2']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp101', null, true, $Γ['global']['$tmp2']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp2']['run']['$tmp100'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp100'].Σ = $Γ['global']['$tmp2']['run']['$tmp100'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp100'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp100'] = $Γ['global']['$tmp2']['run']['$tmp100'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp100'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp100', null, true, $Γ['global']['$tmp2']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp100', null, true, $Γ['global']['$tmp2']['run']),
        id: 'IF'
    });
    if ($tmp100) {
        $upgrade(['$tmp109'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp2']['run']);
        var $tmp105, $tmp106, $tmp104;
        $Γ['global']['$tmp2']['run']['$tmp104'] = $Γ['global']['$tmp2']['run']['$tmp106'] = $Γ['global']['$tmp2']['run']['$tmp105'] = 0;
        $tmp105 = this.v1;
        $Γ['global']['$tmp2']['run']['$tmp105'] = sec_lvl('$tmp2', 'v1', false, $Γ['global']['$tmp2']['run']);
        $Γ['global']['$tmp2']['run']['$tmp105'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp105'].Σ = $Γ['global']['$tmp2']['run']['$tmp105'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp105'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp105'] = $Γ['global']['$tmp2']['run']['$tmp105'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp105'] : $Λ[$Λ.length - 1].l;
        this.v1 = $tmp105 >> 1;
        $Γ['global']['$tmp2']['run']['$this']['v1'] = sec_lvl('$tmp105', null, true, $Γ['global']['$tmp2']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp105', null, true, $Γ['global']['$tmp2']['run']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp2']['run']['$this']['v1'] instanceof Object ? $Γ['global']['$tmp2']['run']['$this']['v1'].Σ = $Γ['global']['$tmp2']['run']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$this']['v1'] = $Γ['global']['$tmp2']['run']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$this']['v1'] : $Λ[$Λ.length - 1].l;
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp2']['run']['$tmp104'] = sec_lvl('$tmp2', 'scheduler', false, $Γ['global']['$tmp2']['run']);
        $Γ['global']['$tmp2']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp104'].Σ = $Γ['global']['$tmp2']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp104'] = $Γ['global']['$tmp2']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp106 = $tmp104.release(ID_DEVICE_A);
        return $tmp106;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade(['$tmp106'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp2']['run']);
        var $tmp107, $tmp108, $tmp109, $tmp104;
        $Γ['global']['$tmp2']['run']['$tmp104'] = $Γ['global']['$tmp2']['run']['$tmp109'] = $Γ['global']['$tmp2']['run']['$tmp108'] = $Γ['global']['$tmp2']['run']['$tmp107'] = 0;
        $tmp108 = this.v1;
        $Γ['global']['$tmp2']['run']['$tmp108'] = sec_lvl('$tmp2', 'v1', false, $Γ['global']['$tmp2']['run']);
        $Γ['global']['$tmp2']['run']['$tmp108'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp108'].Σ = $Γ['global']['$tmp2']['run']['$tmp108'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp108'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp108'] = $Γ['global']['$tmp2']['run']['$tmp108'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp108'] : $Λ[$Λ.length - 1].l;
        $tmp107 = $tmp108 >> 1;
        $Γ['global']['$tmp2']['run']['$tmp107'] = sec_lvl('$tmp108', null, true, $Γ['global']['$tmp2']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp108', null, true, $Γ['global']['$tmp2']['run']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp2']['run']['$tmp107'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp107'].Σ = $Γ['global']['$tmp2']['run']['$tmp107'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp107'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp107'] = $Γ['global']['$tmp2']['run']['$tmp107'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp107'] : $Λ[$Λ.length - 1].l;
        this.v1 = $tmp107 ^ 53256;
        $Γ['global']['$tmp2']['run']['$this']['v1'] = sec_lvl('$tmp107', null, true, $Γ['global']['$tmp2']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp107', null, true, $Γ['global']['$tmp2']['run']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp2']['run']['$this']['v1'] instanceof Object ? $Γ['global']['$tmp2']['run']['$this']['v1'].Σ = $Γ['global']['$tmp2']['run']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$this']['v1'] = $Γ['global']['$tmp2']['run']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$this']['v1'] : $Λ[$Λ.length - 1].l;
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp2']['run']['$tmp104'] = sec_lvl('$tmp2', 'scheduler', false, $Γ['global']['$tmp2']['run']);
        $Γ['global']['$tmp2']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp2']['run']['$tmp104'].Σ = $Γ['global']['$tmp2']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2']['run']['$tmp104'] = $Γ['global']['$tmp2']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp109 = $tmp104.release(ID_DEVICE_B);
        return $tmp109;
        var $shouldComp = { 'lbl': 'FUNC' };
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    return;
};
$Γ['global']['$tmp2']['run'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    packet: $Λ[$Λ.length - 1].l
};
$tmp2 = IdleTask.prototype;
$Γ['global']['$tmp2'] = sec_lvl('IdleTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp2'] instanceof Object ? $Γ['global']['$tmp2'].Σ = $Γ['global']['$tmp2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp2'] = $Γ['global']['$tmp2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp2'] : $Λ[$Λ.length - 1].l;
$tmp2.toString = function () {
    var $tmp110;
    $Γ['global']['$tmp2']['toString']['$tmp110'] = 0;
    $tmp110 = 'IdleTask';
    $Γ['global']['$tmp2']['toString']['$tmp110'] = $Λ[$Λ.length - 1].l;
    return $tmp110;
};
$Γ['global']['$tmp2']['toString'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function DeviceTask(scheduler) {
    this.scheduler = scheduler;
    $Γ['global']['DeviceTask']['$this']['scheduler'] = sec_lvl('scheduler', null, false, $Γ['global']['DeviceTask']);
    $Γ['global']['DeviceTask']['$this']['scheduler'] instanceof Object ? $Γ['global']['DeviceTask']['$this']['scheduler'].Σ = $Γ['global']['DeviceTask']['$this']['scheduler'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['DeviceTask']['$this']['scheduler'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['DeviceTask']['$this']['scheduler'] = $Γ['global']['DeviceTask']['$this']['scheduler'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['DeviceTask']['$this']['scheduler'] : $Λ[$Λ.length - 1].l;
    this.v1 = null;
    $Γ['global']['DeviceTask']['$this']['v1'] = $Λ[$Λ.length - 1].l;
    return;
}
$tmp3 = DeviceTask.prototype;
$Γ['global']['$tmp3'] = sec_lvl('DeviceTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp3'] instanceof Object ? $Γ['global']['$tmp3'].Σ = $Γ['global']['$tmp3'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3'] = $Γ['global']['$tmp3'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'] : $Λ[$Λ.length - 1].l;
$tmp3.run = function (packet) {
    var $tmp111;
    $Γ['global']['$tmp3']['run']['$tmp111'] = 0;
    $tmp111 = packet == null;
    $Γ['global']['$tmp3']['run']['$tmp111'] = sec_lvl('packet', null, true, $Γ['global']['$tmp3']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('packet', null, true, $Γ['global']['$tmp3']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp3']['run']['$tmp111'] instanceof Object ? $Γ['global']['$tmp3']['run']['$tmp111'].Σ = $Γ['global']['$tmp3']['run']['$tmp111'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp111'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$tmp111'] = $Γ['global']['$tmp3']['run']['$tmp111'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp111'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp111', null, true, $Γ['global']['$tmp3']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp111', null, true, $Γ['global']['$tmp3']['run']),
        id: 'IF'
    });
    if ($tmp111) {
        $upgrade(['$tmp116'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp3']['run']);
        var $tmp112, $tmp113, v, $tmp114, $tmp104;
        $Γ['global']['$tmp3']['run']['$tmp104'] = $Γ['global']['$tmp3']['run']['$tmp114'] = $Γ['global']['$tmp3']['run']['v'] = $Γ['global']['$tmp3']['run']['$tmp113'] = $Γ['global']['$tmp3']['run']['$tmp112'] = 0;
        $tmp113 = this.v1;
        $Γ['global']['$tmp3']['run']['$tmp113'] = sec_lvl('$tmp3', 'v1', false, $Γ['global']['$tmp3']['run']);
        $Γ['global']['$tmp3']['run']['$tmp113'] instanceof Object ? $Γ['global']['$tmp3']['run']['$tmp113'].Σ = $Γ['global']['$tmp3']['run']['$tmp113'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp113'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$tmp113'] = $Γ['global']['$tmp3']['run']['$tmp113'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp113'] : $Λ[$Λ.length - 1].l;
        $tmp112 = $tmp113 == null;
        $Γ['global']['$tmp3']['run']['$tmp112'] = sec_lvl('$tmp113', null, true, $Γ['global']['$tmp3']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp113', null, true, $Γ['global']['$tmp3']['run']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp3']['run']['$tmp112'] instanceof Object ? $Γ['global']['$tmp3']['run']['$tmp112'].Σ = $Γ['global']['$tmp3']['run']['$tmp112'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp112'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$tmp112'] = $Γ['global']['$tmp3']['run']['$tmp112'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp112'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp112', null, true, $Γ['global']['$tmp3']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp112', null, true, $Γ['global']['$tmp3']['run']),
            id: 'IF'
        });
        if ($tmp112) {
            var $tmp115, $tmp104;
            $Γ['global']['$tmp3']['run']['$tmp104'] = $Γ['global']['$tmp3']['run']['$tmp115'] = 0;
            $tmp104 = this.scheduler;
            $Γ['global']['$tmp3']['run']['$tmp104'] = sec_lvl('$tmp3', 'scheduler', false, $Γ['global']['$tmp3']['run']);
            $Γ['global']['$tmp3']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp3']['run']['$tmp104'].Σ = $Γ['global']['$tmp3']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$tmp104'] = $Γ['global']['$tmp3']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
            $tmp115 = $tmp104.suspendCurrent();
            return $tmp115;
            var $shouldComp = { 'lbl': 'FUNC' };
        } else {
            $upgrade(['$tmp115'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp3']['run']);
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
        v = this.v1;
        $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'] = sec_lvl('$tmp3', 'v1', false, $Γ['global']['$tmp3']['run']);
        $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'] instanceof Object ? $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'].Σ = $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'] = $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp3']['run'], 'v', true)['v'] : $Λ[$Λ.length - 1].l;
        this.v1 = null;
        $Γ['global']['$tmp3']['run']['$this']['v1'] = $Λ[$Λ.length - 1].l;
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp3']['run']['$tmp104'] = sec_lvl('$tmp3', 'scheduler', false, $Γ['global']['$tmp3']['run']);
        $Γ['global']['$tmp3']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp3']['run']['$tmp104'].Σ = $Γ['global']['$tmp3']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$tmp104'] = $Γ['global']['$tmp3']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp114 = $tmp104.queue(v);
        return $tmp114;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade([
            '$tmp115',
            '$tmp114'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp3']['run']);
        this.v1 = packet;
        $Γ['global']['$tmp3']['run']['$this']['v1'] = sec_lvl('packet', null, false, $Γ['global']['$tmp3']['run']);
        $Γ['global']['$tmp3']['run']['$this']['v1'] instanceof Object ? $Γ['global']['$tmp3']['run']['$this']['v1'].Σ = $Γ['global']['$tmp3']['run']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$this']['v1'] = $Γ['global']['$tmp3']['run']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$this']['v1'] : $Λ[$Λ.length - 1].l;
        var $tmp116, $tmp104;
        $Γ['global']['$tmp3']['run']['$tmp104'] = $Γ['global']['$tmp3']['run']['$tmp116'] = 0;
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp3']['run']['$tmp104'] = sec_lvl('$tmp3', 'scheduler', false, $Γ['global']['$tmp3']['run']);
        $Γ['global']['$tmp3']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp3']['run']['$tmp104'].Σ = $Γ['global']['$tmp3']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3']['run']['$tmp104'] = $Γ['global']['$tmp3']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp116 = $tmp104.holdCurrent();
        return $tmp116;
        var $shouldComp = { 'lbl': 'FUNC' };
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    return;
};
$Γ['global']['$tmp3']['run'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    packet: $Λ[$Λ.length - 1].l
};
$tmp3 = DeviceTask.prototype;
$Γ['global']['$tmp3'] = sec_lvl('DeviceTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp3'] instanceof Object ? $Γ['global']['$tmp3'].Σ = $Γ['global']['$tmp3'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp3'] = $Γ['global']['$tmp3'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp3'] : $Λ[$Λ.length - 1].l;
$tmp3.toString = function () {
    var $tmp117;
    $Γ['global']['$tmp3']['toString']['$tmp117'] = 0;
    $tmp117 = 'DeviceTask';
    $Γ['global']['$tmp3']['toString']['$tmp117'] = $Λ[$Λ.length - 1].l;
    return $tmp117;
};
$Γ['global']['$tmp3']['toString'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function WorkerTask(scheduler, v1, v2) {
    this.scheduler = scheduler;
    $Γ['global']['WorkerTask']['$this']['scheduler'] = sec_lvl('scheduler', null, false, $Γ['global']['WorkerTask']);
    $Γ['global']['WorkerTask']['$this']['scheduler'] instanceof Object ? $Γ['global']['WorkerTask']['$this']['scheduler'].Σ = $Γ['global']['WorkerTask']['$this']['scheduler'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['WorkerTask']['$this']['scheduler'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['WorkerTask']['$this']['scheduler'] = $Γ['global']['WorkerTask']['$this']['scheduler'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['WorkerTask']['$this']['scheduler'] : $Λ[$Λ.length - 1].l;
    this.v1 = v1;
    $Γ['global']['WorkerTask']['$this']['v1'] = sec_lvl('v1', null, false, $Γ['global']['WorkerTask']);
    $Γ['global']['WorkerTask']['$this']['v1'] instanceof Object ? $Γ['global']['WorkerTask']['$this']['v1'].Σ = $Γ['global']['WorkerTask']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['WorkerTask']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['WorkerTask']['$this']['v1'] = $Γ['global']['WorkerTask']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['WorkerTask']['$this']['v1'] : $Λ[$Λ.length - 1].l;
    this.v2 = v2;
    $Γ['global']['WorkerTask']['$this']['v2'] = sec_lvl('v2', null, false, $Γ['global']['WorkerTask']);
    $Γ['global']['WorkerTask']['$this']['v2'] instanceof Object ? $Γ['global']['WorkerTask']['$this']['v2'].Σ = $Γ['global']['WorkerTask']['$this']['v2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['WorkerTask']['$this']['v2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['WorkerTask']['$this']['v2'] = $Γ['global']['WorkerTask']['$this']['v2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['WorkerTask']['$this']['v2'] : $Λ[$Λ.length - 1].l;
    return;
}
$tmp4 = WorkerTask.prototype;
$Γ['global']['$tmp4'] = sec_lvl('WorkerTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp4'] instanceof Object ? $Γ['global']['$tmp4'].Σ = $Γ['global']['$tmp4'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4'] = $Γ['global']['$tmp4'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4'] : $Λ[$Λ.length - 1].l;
$tmp4.run = function (packet) {
    var $tmp118;
    $Γ['global']['$tmp4']['run']['$tmp118'] = 0;
    $tmp118 = packet == null;
    $Γ['global']['$tmp4']['run']['$tmp118'] = sec_lvl('packet', null, true, $Γ['global']['$tmp4']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('packet', null, true, $Γ['global']['$tmp4']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp4']['run']['$tmp118'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp118'].Σ = $Γ['global']['$tmp4']['run']['$tmp118'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp118'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp118'] = $Γ['global']['$tmp4']['run']['$tmp118'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp118'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp118', null, true, $Γ['global']['$tmp4']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp118', null, true, $Γ['global']['$tmp4']['run']),
        id: 'IF'
    });
    if ($tmp118) {
        $upgrade(['$tmp124'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp4']['run']);
        var $tmp119, $tmp104;
        $Γ['global']['$tmp4']['run']['$tmp104'] = $Γ['global']['$tmp4']['run']['$tmp119'] = 0;
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp4']['run']['$tmp104'] = sec_lvl('$tmp4', 'scheduler', false, $Γ['global']['$tmp4']['run']);
        $Γ['global']['$tmp4']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp104'].Σ = $Γ['global']['$tmp4']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp104'] = $Γ['global']['$tmp4']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp119 = $tmp104.suspendCurrent();
        return $tmp119;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
        $upgrade(['$tmp119'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp4']['run']);
        var $tmp120, $tmp121, i, $tmp123, $tmp124, $tmp104;
        $Γ['global']['$tmp4']['run']['$tmp104'] = $Γ['global']['$tmp4']['run']['$tmp124'] = $Γ['global']['$tmp4']['run']['$tmp123'] = $Γ['global']['$tmp4']['run']['i'] = $Γ['global']['$tmp4']['run']['$tmp121'] = $Γ['global']['$tmp4']['run']['$tmp120'] = 0;
        $tmp121 = this.v1;
        $Γ['global']['$tmp4']['run']['$tmp121'] = sec_lvl('$tmp4', 'v1', false, $Γ['global']['$tmp4']['run']);
        $Γ['global']['$tmp4']['run']['$tmp121'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp121'].Σ = $Γ['global']['$tmp4']['run']['$tmp121'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp121'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp121'] = $Γ['global']['$tmp4']['run']['$tmp121'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp121'] : $Λ[$Λ.length - 1].l;
        $tmp120 = $tmp121 == ID_HANDLER_A;
        $Γ['global']['$tmp4']['run']['$tmp120'] = sec_lvl('$tmp121', null, true, $Γ['global']['$tmp4']['run']) >= sec_lvl('ID_HANDLER_A', null, true, $Γ['global']['$tmp4']['run']) ? sec_lvl('$tmp121', null, true, $Γ['global']['$tmp4']['run']) : sec_lvl('ID_HANDLER_A', null, true, $Γ['global']['$tmp4']['run']);
        $Γ['global']['$tmp4']['run']['$tmp120'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp120'].Σ = $Γ['global']['$tmp4']['run']['$tmp120'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp120'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp120'] = $Γ['global']['$tmp4']['run']['$tmp120'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp120'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp120', null, true, $Γ['global']['$tmp4']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp120', null, true, $Γ['global']['$tmp4']['run']),
            id: 'IF'
        });
        if ($tmp120) {
            this.v1 = ID_HANDLER_B;
            $Γ['global']['$tmp4']['run']['$this']['v1'] = sec_lvl('ID_HANDLER_B', null, false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$this']['v1'] instanceof Object ? $Γ['global']['$tmp4']['run']['$this']['v1'].Σ = $Γ['global']['$tmp4']['run']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$this']['v1'] = $Γ['global']['$tmp4']['run']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$this']['v1'] : $Λ[$Λ.length - 1].l;
        } else {
            this.v1 = ID_HANDLER_A;
            $Γ['global']['$tmp4']['run']['$this']['v1'] = sec_lvl('ID_HANDLER_A', null, false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$this']['v1'] instanceof Object ? $Γ['global']['$tmp4']['run']['$this']['v1'].Σ = $Γ['global']['$tmp4']['run']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$this']['v1'] = $Γ['global']['$tmp4']['run']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$this']['v1'] : $Λ[$Λ.length - 1].l;
        }
        $Λ.pop();
        packet.id = this.v1;
        $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'] = sec_lvl('$tmp4', 'v1', false, $Γ['global']['$tmp4']['run']);
        $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'] instanceof Object ? $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'].Σ = $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'] = $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp4']['run'], 'packet', false)['id'] : $Λ[$Λ.length - 1].l;
        packet.a1 = 0;
        $scope($Γ['global']['$tmp4']['run'], 'packet', false)['a1'] = $Λ[$Λ.length - 1].l;
        i = 0;
        $scope($Γ['global']['$tmp4']['run'], 'i', true)['i'] = $Λ[$Λ.length - 1].l;
        $tmp123 = i < DATA_SIZE;
        $Γ['global']['$tmp4']['run']['$tmp123'] = sec_lvl('i', null, true, $Γ['global']['$tmp4']['run']) >= sec_lvl('DATA_SIZE', null, true, $Γ['global']['$tmp4']['run']) ? sec_lvl('i', null, true, $Γ['global']['$tmp4']['run']) : sec_lvl('DATA_SIZE', null, true, $Γ['global']['$tmp4']['run']);
        $Γ['global']['$tmp4']['run']['$tmp123'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp123'].Σ = $Γ['global']['$tmp4']['run']['$tmp123'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp123'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp123'] = $Γ['global']['$tmp4']['run']['$tmp123'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp123'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp123', null, true, $Γ['global']['$tmp4']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp123', null, true, $Γ['global']['$tmp4']['run']),
            id: 'LOOP'
        });
        for (; $tmp123;) {
            var $tmp125, $tmp126, $tmp127, $tmp128, $tmp129, $tmp122, $tmp123;
            $Γ['global']['$tmp4']['run']['$tmp123'] = $Γ['global']['$tmp4']['run']['$tmp122'] = $Γ['global']['$tmp4']['run']['$tmp129'] = $Γ['global']['$tmp4']['run']['$tmp128'] = $Γ['global']['$tmp4']['run']['$tmp127'] = $Γ['global']['$tmp4']['run']['$tmp126'] = $Γ['global']['$tmp4']['run']['$tmp125'] = 0;
            $tmp126 = this;
            $Γ['global']['$tmp4']['run']['$tmp126'] = $Γ['global']['$tmp4']['run'].$this;
            $Γ['global']['$tmp4']['run']['$tmp126'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp126'].Σ = $Γ['global']['$tmp4']['run']['$tmp126'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp126'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp126'] = $Γ['global']['$tmp4']['run']['$tmp126'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp126'] : $Λ[$Λ.length - 1].l;
            $tmp125 = $tmp126.v2++;
            $Γ['global']['$tmp4']['run']['$tmp125'] = sec_lvl('$tmp126', 'v2', false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$tmp125'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp125'].Σ = $Γ['global']['$tmp4']['run']['$tmp125'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp125'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp125'] = $Γ['global']['$tmp4']['run']['$tmp125'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp125'] : $Λ[$Λ.length - 1].l;
            $tmp128 = this.v2;
            $Γ['global']['$tmp4']['run']['$tmp128'] = sec_lvl('$tmp4', 'v2', false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$tmp128'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp128'].Σ = $Γ['global']['$tmp4']['run']['$tmp128'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp128'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp128'] = $Γ['global']['$tmp4']['run']['$tmp128'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp128'] : $Λ[$Λ.length - 1].l;
            $tmp127 = $tmp128 > 26;
            $Γ['global']['$tmp4']['run']['$tmp127'] = sec_lvl('$tmp128', null, true, $Γ['global']['$tmp4']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp128', null, true, $Γ['global']['$tmp4']['run']) : $Λ[$Λ.length - 1].l;
            $Γ['global']['$tmp4']['run']['$tmp127'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp127'].Σ = $Γ['global']['$tmp4']['run']['$tmp127'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp127'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp127'] = $Γ['global']['$tmp4']['run']['$tmp127'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp127'] : $Λ[$Λ.length - 1].l;
            $Λ.push({
                l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp127', null, true, $Γ['global']['$tmp4']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp127', null, true, $Γ['global']['$tmp4']['run']),
                id: 'IF'
            });
            if ($tmp127) {
                this.v2 = 1;
                $Γ['global']['$tmp4']['run']['$this']['v2'] = $Λ[$Λ.length - 1].l;
            } else {
            }
            $Λ.pop();
            $tmp129 = packet.a2;
            $Γ['global']['$tmp4']['run']['$tmp129'] = sec_lvl('packet', 'a2', false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$tmp129'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp129'].Σ = $Γ['global']['$tmp4']['run']['$tmp129'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp129'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp129'] = $Γ['global']['$tmp4']['run']['$tmp129'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp129'] : $Λ[$Λ.length - 1].l;
            $tmp129[i] = this.v2;
            $Γ['global']['$tmp4']['run']['$tmp129']['i'] = sec_lvl('$tmp4', 'v2', false, $Γ['global']['$tmp4']['run']);
            _$tmp = sec_lvl('i', null, false, $Γ['global']['$tmp4']['run']) instanceof Object ? sec_lvl('i', null, false, $Γ['global']['$tmp4']['run']).Σ : sec_lvl('i', null, false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$tmp129']['i'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp129']['i'].Σ = $Γ['global']['$tmp4']['run']['$tmp129']['i'].Σ : $Γ['global']['$tmp4']['run']['$tmp129']['i'] = $Γ['global']['$tmp4']['run']['$tmp129']['i'];
            $tmp122 = i++;
            $Γ['global']['$tmp4']['run']['$tmp122'] = sec_lvl('i', null, false, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$tmp122'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp122'].Σ = $Γ['global']['$tmp4']['run']['$tmp122'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp122'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp122'] = $Γ['global']['$tmp4']['run']['$tmp122'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp122'] : $Λ[$Λ.length - 1].l;
            $tmp123 = i < DATA_SIZE;
            $Γ['global']['$tmp4']['run']['$tmp123'] = sec_lvl('i', null, true, $Γ['global']['$tmp4']['run']) >= sec_lvl('DATA_SIZE', null, true, $Γ['global']['$tmp4']['run']) ? sec_lvl('i', null, true, $Γ['global']['$tmp4']['run']) : sec_lvl('DATA_SIZE', null, true, $Γ['global']['$tmp4']['run']);
            $Γ['global']['$tmp4']['run']['$tmp123'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp123'].Σ = $Γ['global']['$tmp4']['run']['$tmp123'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp123'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp123'] = $Γ['global']['$tmp4']['run']['$tmp123'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp123'] : $Λ[$Λ.length - 1].l;
        }
        $Λ.pop();
        $tmp104 = this.scheduler;
        $Γ['global']['$tmp4']['run']['$tmp104'] = sec_lvl('$tmp4', 'scheduler', false, $Γ['global']['$tmp4']['run']);
        $Γ['global']['$tmp4']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp4']['run']['$tmp104'].Σ = $Γ['global']['$tmp4']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4']['run']['$tmp104'] = $Γ['global']['$tmp4']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
        $tmp124 = $tmp104.queue(packet);
        return $tmp124;
        var $shouldComp = { 'lbl': 'FUNC' };
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    return;
};
$Γ['global']['$tmp4']['run'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    packet: $Λ[$Λ.length - 1].l
};
$tmp4 = WorkerTask.prototype;
$Γ['global']['$tmp4'] = sec_lvl('WorkerTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp4'] instanceof Object ? $Γ['global']['$tmp4'].Σ = $Γ['global']['$tmp4'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp4'] = $Γ['global']['$tmp4'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp4'] : $Λ[$Λ.length - 1].l;
$tmp4.toString = function () {
    var $tmp130;
    $Γ['global']['$tmp4']['toString']['$tmp130'] = 0;
    $tmp130 = 'WorkerTask';
    $Γ['global']['$tmp4']['toString']['$tmp130'] = $Λ[$Λ.length - 1].l;
    return $tmp130;
};
$Γ['global']['$tmp4']['toString'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
function HandlerTask(scheduler) {
    this.scheduler = scheduler;
    $Γ['global']['HandlerTask']['$this']['scheduler'] = sec_lvl('scheduler', null, false, $Γ['global']['HandlerTask']);
    $Γ['global']['HandlerTask']['$this']['scheduler'] instanceof Object ? $Γ['global']['HandlerTask']['$this']['scheduler'].Σ = $Γ['global']['HandlerTask']['$this']['scheduler'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['HandlerTask']['$this']['scheduler'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['HandlerTask']['$this']['scheduler'] = $Γ['global']['HandlerTask']['$this']['scheduler'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['HandlerTask']['$this']['scheduler'] : $Λ[$Λ.length - 1].l;
    this.v1 = null;
    $Γ['global']['HandlerTask']['$this']['v1'] = $Λ[$Λ.length - 1].l;
    this.v2 = null;
    $Γ['global']['HandlerTask']['$this']['v2'] = $Λ[$Λ.length - 1].l;
    return;
}
$tmp5 = HandlerTask.prototype;
$Γ['global']['$tmp5'] = sec_lvl('HandlerTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp5'] instanceof Object ? $Γ['global']['$tmp5'].Σ = $Γ['global']['$tmp5'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5'] = $Γ['global']['$tmp5'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5'] : $Λ[$Λ.length - 1].l;
$tmp5.run = function (packet) {
    var $tmp131, $tmp132, $tmp133, $tmp134, $tmp104;
    $Γ['global']['$tmp5']['run']['$tmp104'] = $Γ['global']['$tmp5']['run']['$tmp134'] = $Γ['global']['$tmp5']['run']['$tmp133'] = $Γ['global']['$tmp5']['run']['$tmp132'] = $Γ['global']['$tmp5']['run']['$tmp131'] = 0;
    $tmp131 = packet != null;
    $Γ['global']['$tmp5']['run']['$tmp131'] = sec_lvl('packet', null, true, $Γ['global']['$tmp5']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('packet', null, true, $Γ['global']['$tmp5']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp5']['run']['$tmp131'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp131'].Σ = $Γ['global']['$tmp5']['run']['$tmp131'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp131'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp131'] = $Γ['global']['$tmp5']['run']['$tmp131'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp131'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp131', null, true, $Γ['global']['$tmp5']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp131', null, true, $Γ['global']['$tmp5']['run']),
        id: 'IF'
    });
    if ($tmp131) {
        var $tmp135, $tmp136;
        $Γ['global']['$tmp5']['run']['$tmp136'] = $Γ['global']['$tmp5']['run']['$tmp135'] = 0;
        $tmp136 = packet.kind;
        $Γ['global']['$tmp5']['run']['$tmp136'] = sec_lvl('packet', 'kind', false, $Γ['global']['$tmp5']['run']);
        $Γ['global']['$tmp5']['run']['$tmp136'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp136'].Σ = $Γ['global']['$tmp5']['run']['$tmp136'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp136'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp136'] = $Γ['global']['$tmp5']['run']['$tmp136'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp136'] : $Λ[$Λ.length - 1].l;
        $tmp135 = $tmp136 == KIND_WORK;
        $Γ['global']['$tmp5']['run']['$tmp135'] = sec_lvl('$tmp136', null, true, $Γ['global']['$tmp5']['run']) >= sec_lvl('KIND_WORK', null, true, $Γ['global']['$tmp5']['run']) ? sec_lvl('$tmp136', null, true, $Γ['global']['$tmp5']['run']) : sec_lvl('KIND_WORK', null, true, $Γ['global']['$tmp5']['run']);
        $Γ['global']['$tmp5']['run']['$tmp135'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp135'].Σ = $Γ['global']['$tmp5']['run']['$tmp135'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp135'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp135'] = $Γ['global']['$tmp5']['run']['$tmp135'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp135'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp135', null, true, $Γ['global']['$tmp5']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp135', null, true, $Γ['global']['$tmp5']['run']),
            id: 'IF'
        });
        if ($tmp135) {
            $upgrade(['this'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
            var $tmp137;
            $Γ['global']['$tmp5']['run']['$tmp137'] = 0;
            $tmp137 = this.v1;
            $Γ['global']['$tmp5']['run']['$tmp137'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
            $Γ['global']['$tmp5']['run']['$tmp137'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp137'].Σ = $Γ['global']['$tmp5']['run']['$tmp137'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp137'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp137'] = $Γ['global']['$tmp5']['run']['$tmp137'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp137'] : $Λ[$Λ.length - 1].l;
            this.v1 = packet.addTo($tmp137);
        } else {
            $upgrade(['this'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
            var $tmp138;
            $Γ['global']['$tmp5']['run']['$tmp138'] = 0;
            $tmp138 = this.v2;
            $Γ['global']['$tmp5']['run']['$tmp138'] = sec_lvl('$tmp5', 'v2', false, $Γ['global']['$tmp5']['run']);
            $Γ['global']['$tmp5']['run']['$tmp138'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp138'].Σ = $Γ['global']['$tmp5']['run']['$tmp138'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp138'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp138'] = $Γ['global']['$tmp5']['run']['$tmp138'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp138'] : $Λ[$Λ.length - 1].l;
            this.v2 = packet.addTo($tmp138);
        }
        $Λ.pop();
    } else {
        $upgrade(['this'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
    }
    $Λ.pop();
    $tmp133 = this.v1;
    $Γ['global']['$tmp5']['run']['$tmp133'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
    $Γ['global']['$tmp5']['run']['$tmp133'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp133'].Σ = $Γ['global']['$tmp5']['run']['$tmp133'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp133'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp133'] = $Γ['global']['$tmp5']['run']['$tmp133'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp133'] : $Λ[$Λ.length - 1].l;
    $tmp132 = $tmp133 != null;
    $Γ['global']['$tmp5']['run']['$tmp132'] = sec_lvl('$tmp133', null, true, $Γ['global']['$tmp5']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp133', null, true, $Γ['global']['$tmp5']['run']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp5']['run']['$tmp132'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp132'].Σ = $Γ['global']['$tmp5']['run']['$tmp132'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp132'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp132'] = $Γ['global']['$tmp5']['run']['$tmp132'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp132'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp132', null, true, $Γ['global']['$tmp5']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp132', null, true, $Γ['global']['$tmp5']['run']),
        id: 'IF'
    });
    if ($tmp132) {
        var count, $tmp139, v, $tmp140;
        $Γ['global']['$tmp5']['run']['$tmp140'] = $Γ['global']['$tmp5']['run']['v'] = $Γ['global']['$tmp5']['run']['$tmp139'] = $Γ['global']['$tmp5']['run']['count'] = 0;
        $tmp139 = this.v1;
        $Γ['global']['$tmp5']['run']['$tmp139'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
        $Γ['global']['$tmp5']['run']['$tmp139'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ = $Γ['global']['$tmp5']['run']['$tmp139'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp139'] = $Γ['global']['$tmp5']['run']['$tmp139'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'] : $Λ[$Λ.length - 1].l;
        count = $tmp139.a1;
        $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'] = sec_lvl('$tmp139', 'a1', false, $Γ['global']['$tmp5']['run']);
        $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'] instanceof Object ? $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'].Σ = $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'] = $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'count', true)['count'] : $Λ[$Λ.length - 1].l;
        $tmp140 = count < DATA_SIZE;
        $Γ['global']['$tmp5']['run']['$tmp140'] = sec_lvl('count', null, true, $Γ['global']['$tmp5']['run']) >= sec_lvl('DATA_SIZE', null, true, $Γ['global']['$tmp5']['run']) ? sec_lvl('count', null, true, $Γ['global']['$tmp5']['run']) : sec_lvl('DATA_SIZE', null, true, $Γ['global']['$tmp5']['run']);
        $Γ['global']['$tmp5']['run']['$tmp140'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp140'].Σ = $Γ['global']['$tmp5']['run']['$tmp140'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp140'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp140'] = $Γ['global']['$tmp5']['run']['$tmp140'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp140'] : $Λ[$Λ.length - 1].l;
        $Λ.push({
            l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp140', null, true, $Γ['global']['$tmp5']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp140', null, true, $Γ['global']['$tmp5']['run']),
            id: 'IF'
        });
        if ($tmp140) {
            $upgrade(['$tmp145'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
            var $tmp141, $tmp142;
            $Γ['global']['$tmp5']['run']['$tmp142'] = $Γ['global']['$tmp5']['run']['$tmp141'] = 0;
            $tmp142 = this.v2;
            $Γ['global']['$tmp5']['run']['$tmp142'] = sec_lvl('$tmp5', 'v2', false, $Γ['global']['$tmp5']['run']);
            $Γ['global']['$tmp5']['run']['$tmp142'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp142'].Σ = $Γ['global']['$tmp5']['run']['$tmp142'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp142'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp142'] = $Γ['global']['$tmp5']['run']['$tmp142'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp142'] : $Λ[$Λ.length - 1].l;
            $tmp141 = $tmp142 != null;
            $Γ['global']['$tmp5']['run']['$tmp141'] = sec_lvl('$tmp142', null, true, $Γ['global']['$tmp5']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp142', null, true, $Γ['global']['$tmp5']['run']) : $Λ[$Λ.length - 1].l;
            $Γ['global']['$tmp5']['run']['$tmp141'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp141'].Σ = $Γ['global']['$tmp5']['run']['$tmp141'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp141'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp141'] = $Γ['global']['$tmp5']['run']['$tmp141'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp141'] : $Λ[$Λ.length - 1].l;
            $Λ.push({
                l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp141', null, true, $Γ['global']['$tmp5']['run']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp141', null, true, $Γ['global']['$tmp5']['run']),
                id: 'IF'
            });
            if ($tmp141) {
                v = this.v2;
                $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] = sec_lvl('$tmp5', 'v2', false, $Γ['global']['$tmp5']['run']);
                $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] instanceof Object ? $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'].Σ = $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] = $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] : $Λ[$Λ.length - 1].l;
                var $tmp143, $tmp139, $tmp144, $tmp104;
                $Γ['global']['$tmp5']['run']['$tmp104'] = $Γ['global']['$tmp5']['run']['$tmp144'] = $Γ['global']['$tmp5']['run']['$tmp139'] = $Γ['global']['$tmp5']['run']['$tmp143'] = 0;
                $tmp143 = this.v2;
                $Γ['global']['$tmp5']['run']['$tmp143'] = sec_lvl('$tmp5', 'v2', false, $Γ['global']['$tmp5']['run']);
                $Γ['global']['$tmp5']['run']['$tmp143'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp143'].Σ = $Γ['global']['$tmp5']['run']['$tmp143'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp143'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp143'] = $Γ['global']['$tmp5']['run']['$tmp143'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp143'] : $Λ[$Λ.length - 1].l;
                this.v2 = $tmp143.link;
                $Γ['global']['$tmp5']['run']['$this']['v2'] = sec_lvl('$tmp143', 'link', false, $Γ['global']['$tmp5']['run']);
                $Γ['global']['$tmp5']['run']['$this']['v2'] instanceof Object ? $Γ['global']['$tmp5']['run']['$this']['v2'].Σ = $Γ['global']['$tmp5']['run']['$this']['v2'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$this']['v2'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$this']['v2'] = $Γ['global']['$tmp5']['run']['$this']['v2'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$this']['v2'] : $Λ[$Λ.length - 1].l;
                $tmp139 = this.v1;
                $Γ['global']['$tmp5']['run']['$tmp139'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
                $Γ['global']['$tmp5']['run']['$tmp139'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ = $Γ['global']['$tmp5']['run']['$tmp139'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp139'] = $Γ['global']['$tmp5']['run']['$tmp139'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'] : $Λ[$Λ.length - 1].l;
                $tmp = $tmp139.a2;
                $Γ['global']['$tmp5']['run']['$tmp'] = sec_lvl('$tmp139', 'a2', false, $Γ['global']['$tmp5']['run']);
                $Γ['global']['$tmp5']['run']['$tmp'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp'].Σ = $Γ['global']['$tmp5']['run']['$tmp'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp'] = $Γ['global']['$tmp5']['run']['$tmp'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp'] : $Λ[$Λ.length - 1].l;
                v.a1 = $tmp[count];
                $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'] = sec_lvl('$tmp', count, false, $Γ['global']['$tmp5']['run']);
                $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'] instanceof Object ? $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'].Σ = $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'] = $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'v', false)['a1'] : $Λ[$Λ.length - 1].l;
                $tmp139 = this.v1;
                $Γ['global']['$tmp5']['run']['$tmp139'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
                $Γ['global']['$tmp5']['run']['$tmp139'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ = $Γ['global']['$tmp5']['run']['$tmp139'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp139'] = $Γ['global']['$tmp5']['run']['$tmp139'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'] : $Λ[$Λ.length - 1].l;
                $tmp139.a1 = count + 1;
                $Γ['global']['$tmp5']['run']['$tmp139']['a1'] = sec_lvl('count', null, true, $Γ['global']['$tmp5']['run']) >= $Λ[$Λ.length - 1].l ? sec_lvl('count', null, true, $Γ['global']['$tmp5']['run']) : $Λ[$Λ.length - 1].l;
                $Γ['global']['$tmp5']['run']['$tmp139']['a1'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp139']['a1'].Σ = $Γ['global']['$tmp5']['run']['$tmp139']['a1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139']['a1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp139']['a1'] = $Γ['global']['$tmp5']['run']['$tmp139']['a1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139']['a1'] : $Λ[$Λ.length - 1].l;
                $tmp104 = this.scheduler;
                $Γ['global']['$tmp5']['run']['$tmp104'] = sec_lvl('$tmp5', 'scheduler', false, $Γ['global']['$tmp5']['run']);
                $Γ['global']['$tmp5']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp104'].Σ = $Γ['global']['$tmp5']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp104'] = $Γ['global']['$tmp5']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
                $tmp144 = $tmp104.queue(v);
                return $tmp144;
                var $shouldComp = { 'lbl': 'FUNC' };
            } else {
                $upgrade(['$tmp144'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
            }
            if ($shouldComp)
                $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
            $Λ.pop();
        } else {
            $upgrade(['$tmp144'], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
            v = this.v1;
            $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
            $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] instanceof Object ? $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'].Σ = $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] = $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp5']['run'], 'v', true)['v'] : $Λ[$Λ.length - 1].l;
            var $tmp139, $tmp145, $tmp104;
            $Γ['global']['$tmp5']['run']['$tmp104'] = $Γ['global']['$tmp5']['run']['$tmp145'] = $Γ['global']['$tmp5']['run']['$tmp139'] = 0;
            $tmp139 = this.v1;
            $Γ['global']['$tmp5']['run']['$tmp139'] = sec_lvl('$tmp5', 'v1', false, $Γ['global']['$tmp5']['run']);
            $Γ['global']['$tmp5']['run']['$tmp139'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ = $Γ['global']['$tmp5']['run']['$tmp139'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp139'] = $Γ['global']['$tmp5']['run']['$tmp139'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp139'] : $Λ[$Λ.length - 1].l;
            this.v1 = $tmp139.link;
            $Γ['global']['$tmp5']['run']['$this']['v1'] = sec_lvl('$tmp139', 'link', false, $Γ['global']['$tmp5']['run']);
            $Γ['global']['$tmp5']['run']['$this']['v1'] instanceof Object ? $Γ['global']['$tmp5']['run']['$this']['v1'].Σ = $Γ['global']['$tmp5']['run']['$this']['v1'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$this']['v1'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$this']['v1'] = $Γ['global']['$tmp5']['run']['$this']['v1'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$this']['v1'] : $Λ[$Λ.length - 1].l;
            $tmp104 = this.scheduler;
            $Γ['global']['$tmp5']['run']['$tmp104'] = sec_lvl('$tmp5', 'scheduler', false, $Γ['global']['$tmp5']['run']);
            $Γ['global']['$tmp5']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp104'].Σ = $Γ['global']['$tmp5']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp104'] = $Γ['global']['$tmp5']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
            $tmp145 = $tmp104.queue(v);
            return $tmp145;
            var $shouldComp = { 'lbl': 'FUNC' };
        }
        if ($shouldComp)
            $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
        $Λ.pop();
    } else {
        $upgrade([
            '$tmp144',
            '$tmp145'
        ], $Λ[$Λ.length - 1].l, $Γ['global']['$tmp5']['run']);
    }
    $Λ.pop();
    $tmp104 = this.scheduler;
    $Γ['global']['$tmp5']['run']['$tmp104'] = sec_lvl('$tmp5', 'scheduler', false, $Γ['global']['$tmp5']['run']);
    $Γ['global']['$tmp5']['run']['$tmp104'] instanceof Object ? $Γ['global']['$tmp5']['run']['$tmp104'].Σ = $Γ['global']['$tmp5']['run']['$tmp104'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp104'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5']['run']['$tmp104'] = $Γ['global']['$tmp5']['run']['$tmp104'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5']['run']['$tmp104'] : $Λ[$Λ.length - 1].l;
    $tmp134 = $tmp104.suspendCurrent();
    return $tmp134;
};
$Γ['global']['$tmp5']['run'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    packet: $Λ[$Λ.length - 1].l
};
$tmp5 = HandlerTask.prototype;
$Γ['global']['$tmp5'] = sec_lvl('HandlerTask', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp5'] instanceof Object ? $Γ['global']['$tmp5'].Σ = $Γ['global']['$tmp5'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp5'] = $Γ['global']['$tmp5'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp5'] : $Λ[$Λ.length - 1].l;
$tmp5.toString = function () {
    var $tmp146;
    $Γ['global']['$tmp5']['toString']['$tmp146'] = 0;
    $tmp146 = 'HandlerTask';
    $Γ['global']['$tmp5']['toString']['$tmp146'] = $Λ[$Λ.length - 1].l;
    return $tmp146;
};
$Γ['global']['$tmp5']['toString'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
DATA_SIZE = 4;
$Γ['global']['DATA_SIZE'] = $Λ[$Λ.length - 1].l;
function Packet(link, id, kind) {
    this.link = link;
    $Γ['global']['Packet']['$this']['link'] = sec_lvl('link', null, false, $Γ['global']['Packet']);
    $Γ['global']['Packet']['$this']['link'] instanceof Object ? $Γ['global']['Packet']['$this']['link'].Σ = $Γ['global']['Packet']['$this']['link'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['Packet']['$this']['link'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['Packet']['$this']['link'] = $Γ['global']['Packet']['$this']['link'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['Packet']['$this']['link'] : $Λ[$Λ.length - 1].l;
    this.id = id;
    $Γ['global']['Packet']['$this']['id'] = sec_lvl('id', null, false, $Γ['global']['Packet']);
    $Γ['global']['Packet']['$this']['id'] instanceof Object ? $Γ['global']['Packet']['$this']['id'].Σ = $Γ['global']['Packet']['$this']['id'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['Packet']['$this']['id'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['Packet']['$this']['id'] = $Γ['global']['Packet']['$this']['id'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['Packet']['$this']['id'] : $Λ[$Λ.length - 1].l;
    this.kind = kind;
    $Γ['global']['Packet']['$this']['kind'] = sec_lvl('kind', null, false, $Γ['global']['Packet']);
    $Γ['global']['Packet']['$this']['kind'] instanceof Object ? $Γ['global']['Packet']['$this']['kind'].Σ = $Γ['global']['Packet']['$this']['kind'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['Packet']['$this']['kind'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['Packet']['$this']['kind'] = $Γ['global']['Packet']['$this']['kind'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['Packet']['$this']['kind'] : $Λ[$Λ.length - 1].l;
    this.a1 = 0;
    $Γ['global']['Packet']['$this']['a1'] = $Λ[$Λ.length - 1].l;
    this.a2 = new Array(DATA_SIZE);
    return;
}
$tmp6 = Packet.prototype;
$Γ['global']['$tmp6'] = sec_lvl('Packet', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp6'] instanceof Object ? $Γ['global']['$tmp6'].Σ = $Γ['global']['$tmp6'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6'] = $Γ['global']['$tmp6'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6'] : $Λ[$Λ.length - 1].l;
$tmp6.addTo = function (queue) {
    this.link = null;
    $Γ['global']['$tmp6']['addTo']['$this']['link'] = $Λ[$Λ.length - 1].l;
    var $tmp147, peek, next, $tmp148, $tmp149;
    $Γ['global']['$tmp6']['addTo']['$tmp149'] = $Γ['global']['$tmp6']['addTo']['$tmp148'] = $Γ['global']['$tmp6']['addTo']['next'] = $Γ['global']['$tmp6']['addTo']['peek'] = $Γ['global']['$tmp6']['addTo']['$tmp147'] = 0;
    $tmp147 = queue == null;
    $Γ['global']['$tmp6']['addTo']['$tmp147'] = sec_lvl('queue', null, true, $Γ['global']['$tmp6']['addTo']) >= $Λ[$Λ.length - 1].l ? sec_lvl('queue', null, true, $Γ['global']['$tmp6']['addTo']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp6']['addTo']['$tmp147'] instanceof Object ? $Γ['global']['$tmp6']['addTo']['$tmp147'].Σ = $Γ['global']['$tmp6']['addTo']['$tmp147'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp147'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6']['addTo']['$tmp147'] = $Γ['global']['$tmp6']['addTo']['$tmp147'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp147'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp147', null, true, $Γ['global']['$tmp6']['addTo']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp147', null, true, $Γ['global']['$tmp6']['addTo']),
        id: 'IF'
    });
    if ($tmp147) {
        var $tmp150;
        $Γ['global']['$tmp6']['addTo']['$tmp150'] = 0;
        $tmp150 = this;
        $Γ['global']['$tmp6']['addTo']['$tmp150'] = $Γ['global']['$tmp6']['addTo'].$this;
        $Γ['global']['$tmp6']['addTo']['$tmp150'] instanceof Object ? $Γ['global']['$tmp6']['addTo']['$tmp150'].Σ = $Γ['global']['$tmp6']['addTo']['$tmp150'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp150'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6']['addTo']['$tmp150'] = $Γ['global']['$tmp6']['addTo']['$tmp150'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp150'] : $Λ[$Λ.length - 1].l;
        return $tmp150;
        var $shouldComp = { 'lbl': 'FUNC' };
    } else {
    }
    if ($shouldComp)
        $comp($shouldComp.lbl, $Λ[$Λ.length - 1].l);
    $Λ.pop();
    next = queue;
    $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] = sec_lvl('queue', null, false, $Γ['global']['$tmp6']['addTo']);
    $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] instanceof Object ? $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'].Σ = $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] = $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] : $Λ[$Λ.length - 1].l;
    peek = next.link;
    $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] = sec_lvl('next', 'link', false, $Γ['global']['$tmp6']['addTo']);
    $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] instanceof Object ? $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'].Σ = $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] = $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] : $Λ[$Λ.length - 1].l;
    $tmp149 = peek;
    $Γ['global']['$tmp6']['addTo']['$tmp149'] = sec_lvl('peek', null, false, $Γ['global']['$tmp6']['addTo']);
    $Γ['global']['$tmp6']['addTo']['$tmp149'] instanceof Object ? $Γ['global']['$tmp6']['addTo']['$tmp149'].Σ = $Γ['global']['$tmp6']['addTo']['$tmp149'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp149'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6']['addTo']['$tmp149'] = $Γ['global']['$tmp6']['addTo']['$tmp149'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp149'] : $Λ[$Λ.length - 1].l;
    $tmp148 = $tmp149 != null;
    $Γ['global']['$tmp6']['addTo']['$tmp148'] = sec_lvl('$tmp149', null, true, $Γ['global']['$tmp6']['addTo']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp149', null, true, $Γ['global']['$tmp6']['addTo']) : $Λ[$Λ.length - 1].l;
    $Γ['global']['$tmp6']['addTo']['$tmp148'] instanceof Object ? $Γ['global']['$tmp6']['addTo']['$tmp148'].Σ = $Γ['global']['$tmp6']['addTo']['$tmp148'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp148'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6']['addTo']['$tmp148'] = $Γ['global']['$tmp6']['addTo']['$tmp148'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp148'] : $Λ[$Λ.length - 1].l;
    $Λ.push({
        l: $Λ[$Λ.length - 1].l >= sec_lvl('$tmp148', null, true, $Γ['global']['$tmp6']['addTo']) ? $Λ[$Λ.length - 1].l : sec_lvl('$tmp148', null, true, $Γ['global']['$tmp6']['addTo']),
        id: 'LOOP'
    });
    while ($tmp148) {
        next = peek;
        $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] = sec_lvl('peek', null, false, $Γ['global']['$tmp6']['addTo']);
        $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] instanceof Object ? $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'].Σ = $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] = $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'next', true)['next'] : $Λ[$Λ.length - 1].l;
        var $tmp148, $tmp151;
        $Γ['global']['$tmp6']['addTo']['$tmp151'] = $Γ['global']['$tmp6']['addTo']['$tmp148'] = 0;
        peek = next.link;
        $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] = sec_lvl('next', 'link', false, $Γ['global']['$tmp6']['addTo']);
        $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] instanceof Object ? $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'].Σ = $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] = $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'peek', true)['peek'] : $Λ[$Λ.length - 1].l;
        $tmp151 = peek;
        $Γ['global']['$tmp6']['addTo']['$tmp151'] = sec_lvl('peek', null, false, $Γ['global']['$tmp6']['addTo']);
        $Γ['global']['$tmp6']['addTo']['$tmp151'] instanceof Object ? $Γ['global']['$tmp6']['addTo']['$tmp151'].Σ = $Γ['global']['$tmp6']['addTo']['$tmp151'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp151'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6']['addTo']['$tmp151'] = $Γ['global']['$tmp6']['addTo']['$tmp151'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp151'] : $Λ[$Λ.length - 1].l;
        $tmp148 = $tmp151 != null;
        $Γ['global']['$tmp6']['addTo']['$tmp148'] = sec_lvl('$tmp151', null, true, $Γ['global']['$tmp6']['addTo']) >= $Λ[$Λ.length - 1].l ? sec_lvl('$tmp151', null, true, $Γ['global']['$tmp6']['addTo']) : $Λ[$Λ.length - 1].l;
        $Γ['global']['$tmp6']['addTo']['$tmp148'] instanceof Object ? $Γ['global']['$tmp6']['addTo']['$tmp148'].Σ = $Γ['global']['$tmp6']['addTo']['$tmp148'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp148'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6']['addTo']['$tmp148'] = $Γ['global']['$tmp6']['addTo']['$tmp148'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6']['addTo']['$tmp148'] : $Λ[$Λ.length - 1].l;
    }
    $Λ.pop();
    next.link = this;
    $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'] = $Γ['global']['$tmp6']['addTo'].$this;
    $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'] instanceof Object ? $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'].Σ = $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'].Σ >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'].Σ : $Λ[$Λ.length - 1].l : $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'] = $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'] >= $Λ[$Λ.length - 1].l ? $scope($Γ['global']['$tmp6']['addTo'], 'next', false)['link'] : $Λ[$Λ.length - 1].l;
    return queue;
};
$Γ['global']['$tmp6']['addTo'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global'],
    queue: $Λ[$Λ.length - 1].l
};
$tmp6 = Packet.prototype;
$Γ['global']['$tmp6'] = sec_lvl('Packet', 'prototype', false, $Γ['global']);
$Γ['global']['$tmp6'] instanceof Object ? $Γ['global']['$tmp6'].Σ = $Γ['global']['$tmp6'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp6'] = $Γ['global']['$tmp6'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp6'] : $Λ[$Λ.length - 1].l;
$tmp6.toString = function () {
    var $tmp152;
    $Γ['global']['$tmp6']['toString']['$tmp152'] = 0;
    $tmp152 = 'Packet';
    $Γ['global']['$tmp6']['toString']['$tmp152'] = $Λ[$Λ.length - 1].l;
    return $tmp152;
};
$Γ['global']['$tmp6']['toString'] = {
    $fscope: $Λ[$Λ.length - 1].l,
    prototype: { Σ: $Λ[$Λ.length - 1].l },
    Σ: $Λ[$Λ.length - 1].l,
    scope: $Γ['global']
};
$rf = $scope($Γ['global'], 'runRichards', false)['runRichards'];
$rf.scope = $Γ['global'];
$rf.$this = $Γ['global'];
$Λ.push({
    l: $rf.$fscope,
    id: 'FUNC'
});
$tmp7 = runRichards();
$Γ['global']['$tmp7'] = $Λ.pop().l;
$Γ['global']['$tmp7'] instanceof Object ? $Γ['global']['$tmp7'].Σ = $Γ['global']['$tmp7'].Σ >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp7'].Σ : $Λ[$Λ.length - 1].l : $Γ['global']['$tmp7'] = $Γ['global']['$tmp7'] >= $Λ[$Λ.length - 1].l ? $Γ['global']['$tmp7'] : $Λ[$Λ.length - 1].l;