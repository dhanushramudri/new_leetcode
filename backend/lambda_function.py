import sys
import subprocess
import io

def execute_python_code(code):
    # Execute Python code and capture the output
    original_stdout = sys.stdout
    output_capture = io.StringIO()
    
    # Redirect standard output
    try:
        sys.stdout = output_capture
        exec(value)  # Use exec() to execute the code
        
        # Get the captured output
        output = output_capture.getvalue()
        print('Output of the code:', output)
        return output
    except Exception as e:
        return str(e)
    finally:
        # Restore original stdout
        sys.stdout = original_stdout



def execute_java_code(code):
    try:
        print('Received Java code:', code)
        # Create a temporary Java source file
        with open('/tmp/Main.java', 'w') as java_file:
            java_file.write(code)
        
        # Compile the Java source file
        compile_result = subprocess.run(['javac', '/tmp/Main.java'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print('Compilation result:', compile_result.returncode)
        
        if compile_result.returncode != 0:
            # Compilation failed, return the error message
            return compile_result.stderr.decode()
        
        # Run the compiled Java code
        run_result = subprocess.run(['java', '-classpath', '/tmp', 'Main'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print('Run result:', run_result.returncode)
        
        return run_result.stdout.decode()
    
    except Exception as e:
        return str(e)

# # Example Java code
# java_code = """
# public class Main {
#     public static void main(String[] args) {
#         System.out.println("Hello, Java!");
#     }
# }
# """

# # Execute the Java code
# output = execute_java_code(java_code)
# print('Output:', output)



# Cpp Code
def execute_cpp_code(code):
    try:
        # Write the code to a C++ file
        with open('main.cpp', 'w') as file:
            file.write(code)

        # Compile the C++ code
        subprocess.run(['g++', 'main.cpp', '-o', 'main'], check=True)

        # Execute the compiled C++ code
        result = subprocess.run(['./main'], capture_output=True, text=True)
        output = result.stdout
        print('Output of the code:', output)
        return output
    except subprocess.CalledProcessError as e:
        return str(e)



def execute_cpp_code(code):
    try:
        print('Received C++ code:\n', code)
        
        # Create a temporary C++ source file
        with open('/tmp/temp.cpp', 'w') as cpp_file:
            cpp_file.write(code)
        
        # Compile the C++ source file
        compile_result = subprocess.run(
            ['g++', '/tmp/temp.cpp', '-o', '/tmp/temp'],
            stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )
        print('Compilation result:', compile_result.returncode)
        
        if compile_result.returncode != 0:
            # Compilation failed, return the error message
            return compile_result.stderr.decode()
        
        # Run the compiled C++ code
        run_result = subprocess.run(
            ['/tmp/temp'],
            stdout=subprocess.PIPE, stderr=subprocess.PIPE
        )
        print('Run result:', run_result.returncode)
        
        return run_result.stdout.decode()
    
    except Exception as e:
        return str(e)

# # Example C++ code
# cpp_code = """
# #include <iostream>
# using namespace std;

# int main() {
#     cout << "Hello, C++!" << endl;
#     return 0;
# }
# """

# # Execute the C++ code
# output = execute_cpp_code(cpp_code)
# print('Output:', output)


def handler(event, context):
    language = event.get('language', 'python')
    code = event.get('code', '')

    if language == 'python':
        result = execute_python_code(code)
    elif language == 'java':
        result = execute_java_code(code)
    elif language == 'cpp':
        result = execute_cpp_code(code)
    else:
        result = 'Unsupported language: ' + language

    return {'statusCode': 200, 'body': result}


# try:
#             exec(code, globals())  # Execute code
#             result = globals().get('value')  # Access value from globals
#         except Exception as e:
#             return {
#                 'statusCode': 500,
#                 'body': {'errorMessage': str(e), 'errorType': type(e).__name__}
#             }
#         else:  # Return result in both cases
#             return {'statusCode': 200, 'body': result}