function solution(jobs) {
    let answer = 0;
    let currentTime = 0;
    let sumWorkTime = 0;
    let jobCount = jobs.length;

    // 작업을 요청 시간이 빠른 순서로 정렬한다
    jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let pq = [];  // 우선순위 큐처럼 사용할 배열, 작업 시간을 기준으로 최소힙처럼 동작한다
    let curIdx = 0;

    //작업이 끝났을 때, 현재 도착한 요청들 중 짧은 것부터 처리한다.
    while (pq.length > 0 || curIdx < jobCount) {
        //
        while (currentTime >= jobs[curIdx][0] && curIdx < jobCount) { //작업이 끝났을 때, 현재 도착한 요청들을 큐에 넣는다.
            pq.push([jobs[curIdx][0], jobs[curIdx][1]]);
            curIdx++;
        }

        if (pq.length > 0) {//큐가 비어있지 않다면.

            //큐에 있는 것들을 작업시간 짧은 순대로 정렬
            pq.sort((a, b) => a[1] - b[1]);
            let [requestTime, work] = pq.shift();

            //누적요청 시간과 현재 시간 계산하기
            currentTime += work;
            sumWorkTime += currentTime - requestTime;

        } else { //큐가 비어 있으면 그냥 다음 작업 선택
            currentTime = jobs[curIdx][0];
        }



    }
    return Math.floor(sumWorkTime / jobCount)

}
jobs = [[0, 3], [1, 9], [2, 6]];
solution(jobs)