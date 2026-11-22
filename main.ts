f=require('fs');W=(c,x)=>R[c]??[w,-w,-1,1].map((d,j)=>S[n=c+d]%15<5&&(y='udrl'[j]+x,S[m=c-d]%3|K(m)?0:Q[(z=S.map((v,i)=>i-m&&i-c?v:v^4))+n]??=Q.push([z,y,n]),W(n,y)),R[c]=x)
for(d=0;d++<5;f.mkdirSync(O='/output/i00'+d),f.writeFileSync(O+'/solution.txt',P)){s=f.readFileSync(`/input/i00${d}/level.txt`)
K=i=>i%w/7^i/q<<1^k
q=s.indexOf(64,P='',w=d>3?16:9)
for(k=4;k--;)for([S,X,t]of Q=[[s.map((c,i)=>c^4*!(K(i)|c%5-1)),P,q]])if(R={},W(t,X),S+''==s&&(P=R[q]))break}