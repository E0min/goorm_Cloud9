function solution(participant, completion) {
    let map = new Map;
    
    participant.forEach(name => {
        map.set(name, (map.get(name) || 0) + 1);
    })
    
    completion.forEach(name => {
        map.set(name, (map.get(name)) - 1);
        if(map.get(name) === 0){
            map.delete(name);
        }
    })
    
    return map.keys().next().value;
}
