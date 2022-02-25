# ./test.sh TestClass.testcase
source venv/bin/activate
export PATH=$PATH:$(pwd)
python3 tests.py $1