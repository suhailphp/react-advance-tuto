git add .;
for (( ;; ))
do 
    echo "Please Enter Commit Message";
    read msg;
    if [ "$msg" == "" ]
        then 
            echo "Comments Required, Please Try agian";
        else
            break;
        fi
done
git commit -m "$msg";
git push origin master;
