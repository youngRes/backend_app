<?php

class __Mustache_51887a4b21753d176161d980dbe16c5f extends Mustache_Template
{
    private $lambdaHelper;

    public function renderInternal(Mustache_Context $context, $indent = '')
    {
        $this->lambdaHelper = new Mustache_LambdaHelper($this->mustache, $context);
        $buffer = '';

        $buffer .= $indent . '
';
        $buffer .= $indent . '
';
        // 'hiddensection' section
        $value = $context->find('hiddensection');
        $buffer .= $this->section03c43a8fef065e9d99bd8fc69a98c5fe($context, $indent, $value);
        // 'hiddensection' inverted section
        $value = $context->find('hiddensection');
        if (empty($value)) {
            
            $buffer .= $indent . '    <div id="list-container" class="remui-format-list one-section-format mt-20">
';
            $buffer .= $indent . '        <ul class="sections p-15 py-2 px-2 p-y-1 p-x-1">
';
            $buffer .= $indent . '            <li id="section-';
            $value = $this->resolveValue($context->find('section'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= '" class="section" aria-labelledby="section-';
            $value = $this->resolveValue($context->find('section'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= ' .content .summary .title">
';
            $buffer .= $indent . '                <div class="right side">
';
            $buffer .= $indent . '                    ';
            $value = $this->resolveValue($context->find('optionmenu'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '                </div>
';
            $buffer .= $indent . '                <h2 class="section-title">
';
            $buffer .= $indent . '                    <span class="sno ';
            // 'hidden' inverted section
            $value = $context->find('hidden');
            if (empty($value)) {
                
                $buffer .= 'text-primary';
            }
            // 'hidden' section
            $value = $context->find('hidden');
            $buffer .= $this->section84abb2ca392375a862f0cffdc8fe21b3($context, $indent, $value);
            $buffer .= '">
';
            $buffer .= $indent . '                        ';
            $value = $this->resolveValue($context->find('section'), $context);
            $buffer .= call_user_func($this->mustache->getEscape(), $value);
            $buffer .= '&#46;
';
            $buffer .= $indent . '                    </span>
';
            $buffer .= $indent . '                    <span class="title m-0 ';
            // 'hidden' section
            $value = $context->find('hidden');
            $buffer .= $this->section84abb2ca392375a862f0cffdc8fe21b3($context, $indent, $value);
            $buffer .= '">';
            $value = $this->resolveValue($context->find('title'), $context);
            $buffer .= $value;
            $buffer .= '</span>
';
            $buffer .= $indent . '                </h2>
';
            $buffer .= $indent . '                ';
            $value = $this->resolveValue($context->find('summary'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '                <div class="content">
';
            $buffer .= $indent . '                    <div class="summary">
';
            $buffer .= $indent . '                    </div>
';
            $buffer .= $indent . '                    <div class="activities-list">
';
            $buffer .= $indent . '                        ';
            $value = $this->resolveValue($context->find('activities'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '                    </div>
';
            $buffer .= $indent . '                </div>
';
            $buffer .= $indent . '                ';
            $value = $this->resolveValue($context->find('addnewactivity'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '            </li>
';
            // 'sections' section
            $value = $context->find('sections');
            $buffer .= $this->sectionB4da39b507344862c357ab90ecbd4900($context, $indent, $value);
            $buffer .= $indent . '        </ul>
';
            $buffer .= $indent . '    </div>
';
            $buffer .= $indent . '    <!-- next/prev sections -->
';
            $buffer .= $indent . '    <div class="col-md-12 p-0 wdm-card-section m-t-2">
';
            $buffer .= $indent . '        <div class="card-section-leftnav">
';
            $buffer .= $indent . '            ';
            $value = $this->resolveValue($context->find('leftnav'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '        </div>
';
            $buffer .= $indent . '        <div class="card-section-rightnav">
';
            $buffer .= $indent . '            ';
            $value = $this->resolveValue($context->find('rightnav'), $context);
            $buffer .= $value;
            $buffer .= '
';
            $buffer .= $indent . '        </div>
';
            $buffer .= $indent . '    </div>
';
        }

        return $buffer;
    }

    private function section03c43a8fef065e9d99bd8fc69a98c5fe(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
    {{{ hiddensection }}}
';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '    ';
                $value = $this->resolveValue($context->find('hiddensection'), $context);
                $buffer .= $value;
                $buffer .= '
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function section84abb2ca392375a862f0cffdc8fe21b3(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = 'text-muted';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= 'text-muted';
                $context->pop();
            }
        }
    
        return $buffer;
    }

    private function sectionB4da39b507344862c357ab90ecbd4900(Mustache_Context $context, $indent, $value)
    {
        $buffer = '';
    
        if (!is_string($value) && is_callable($value)) {
            $source = '
            <li id="section-{{index}}" class="section hide">
                <div class="content">
                    <div class="sectionname">
                        <h2>
                            {{name}}
                        </h2>
                    </div>
                    <div class="summary">

                    </div>
                </div>
            </li>
            ';
            $result = call_user_func($value, $source, $this->lambdaHelper);
            if (strpos($result, '{{') === false) {
                $buffer .= $result;
            } else {
                $buffer .= $this->mustache
                    ->loadLambda((string) $result)
                    ->renderInternal($context);
            }
        } elseif (!empty($value)) {
            $values = $this->isIterable($value) ? $value : array($value);
            foreach ($values as $value) {
                $context->push($value);
                
                $buffer .= $indent . '            <li id="section-';
                $value = $this->resolveValue($context->find('index'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '" class="section hide">
';
                $buffer .= $indent . '                <div class="content">
';
                $buffer .= $indent . '                    <div class="sectionname">
';
                $buffer .= $indent . '                        <h2>
';
                $buffer .= $indent . '                            ';
                $value = $this->resolveValue($context->find('name'), $context);
                $buffer .= call_user_func($this->mustache->getEscape(), $value);
                $buffer .= '
';
                $buffer .= $indent . '                        </h2>
';
                $buffer .= $indent . '                    </div>
';
                $buffer .= $indent . '                    <div class="summary">
';
                $buffer .= $indent . '
';
                $buffer .= $indent . '                    </div>
';
                $buffer .= $indent . '                </div>
';
                $buffer .= $indent . '            </li>
';
                $context->pop();
            }
        }
    
        return $buffer;
    }

}
