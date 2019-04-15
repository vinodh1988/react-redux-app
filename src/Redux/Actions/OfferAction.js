

export let OfferAction= ()=>{
    let offers=[
        {message:"Oracle Courses Free Vouchers for Certification",code:"Voucher4"},
        {message:"10% discount on webCourses",code:"WEB10"},
        {message:"Free Videos for Angular and React Courses",code:"ANGREACT20"},
        {message:"Exam Vouchers free for REDHAT courses",code:"VoucherRED3"},
        {message:"30% Discount on Node JS course",code:"NODE30"}
    ]
    return {
       type:"OFFER_ACTION",
       data: offers[Math.floor(Math.random()*5)]
    }
}