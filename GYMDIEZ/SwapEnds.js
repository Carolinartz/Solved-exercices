function swapEnds(nums) {
    let PrimerTermino = nums[0];
    if(Array.length>=1) {
    nums[0]= nums [nums.length -1];
    nums[nums.length-1] = PrimerTermino;
    
}
return nums
}