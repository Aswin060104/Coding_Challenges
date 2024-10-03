function minSubarray(nums: number[], p: number): number {
    var sum : number = 0;
    for(var i of nums)
        sum += i;
    var rem : number = sum % p;
    if (rem == 0)
        return 0;
    var temSum : number = 0;
    var count : number = 0;
    var minCount = 10000;
    var p1 : number = 0;
    var p2 : number = 0;
    if( sum < p)
        return -1;
    while(p1 < nums.length && p2 < nums.length){
        if( nums[p2] == rem)
            return 1;
        if( sum - temSum > p ){
            temSum += nums[p1];
            p1++;
            count++;
        }
        else{
            temSum -= nums[p2];
            p2++;
            count--;
        }
        console.log(p1,p2,temSum,sum-temSum,rem);
        if((temSum % rem == 0 || (sum - temSum) % p == 0) && temSum != 0){
            if(count < minCount)
                minCount = count;
        }
    }
    return minCount == 10000 ? -1 : minCount;
};